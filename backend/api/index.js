const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to JSON file
const DATA_FILE = path.join(__dirname, '..', 'data', 'users.json');

// In-memory storage (Vercel serverless functions have read-only filesystem)
let usersCache = null;

// Helper function to read users (loads from file once, then uses cache)
const readUsers = () => {
  try {
    // Load from file only if cache is empty (first time or after reset)
    if (usersCache === null) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      usersCache = JSON.parse(data);
      console.log('Users loaded from file into memory');
    }
    return usersCache;
  } catch (error) {
    console.error('Error reading users:', error);
    // If file read fails, initialize with default data
    usersCache = [
      { id: 1, name: 'John Doe', email: 'john@example.com', age: 30, createdAt: new Date().toISOString() },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25, createdAt: new Date().toISOString() }
    ];
    return usersCache;
  }
};

// Helper function to write users (updates in-memory cache only)
const writeUsers = (users) => {
  try {
    // Store in memory cache (no file write on Vercel)
    usersCache = users;
    console.log('Users updated in memory cache');
    return true;
  } catch (error) {
    console.error('Error updating users cache:', error);
    return false;
  }
};

// Helper function to generate next ID
const getNextId = (users) => {
  if (users.length === 0) return 1;
  return Math.max(...users.map(u => u.id)) + 1;
};

// ==================== ROUTES ====================

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to API Learning 101! 🚀',
    version: '1.0.0',
    storage: 'In-memory (data persists during serverless function lifetime)',
    note: 'Changes are temporary and reset periodically. Use GET /api/reset to reload initial data.',
    endpoints: {
      users: {
        'GET /api/users': 'Get all users',
        'GET /api/users/:id': 'Get user by ID',
        'POST /api/users': 'Create new user',
        'PUT /api/users/:id': 'Update user (full)',
        'DELETE /api/users/:id': 'Delete user',
        'GET /api/reset': 'Reset data to initial state'
      }
    },
    documentation: 'https://github.com/nisalgunawardhana/api-learning-101',
    author: 'Nisal Gunawardhana'
  });
});

// GET /api/users - Get all users
app.get('/api/users', (req, res) => {
  try {
    const users = readUsers();
    
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to retrieve users'
    });
  }
});

// GET /api/users/:id - Get user by ID
app.get('/api/users/:id', (req, res) => {
  try {
    const users = readUsers();
    const userId = parseInt(req.params.id);
    
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `User with ID ${userId} not found`
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to retrieve user'
    });
  }
});

// POST /api/users - Create new user
app.post('/api/users', (req, res) => {
  try {
    const { name, email, age } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Name and email are required fields',
        requiredFields: ['name', 'email']
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(422).json({
        success: false,
        error: 'Validation Error',
        message: 'Invalid email format',
        field: 'email'
      });
    }
    
    // Age validation (if provided)
    if (age !== undefined && (typeof age !== 'number' || age < 0 || age > 150)) {
      return res.status(422).json({
        success: false,
        error: 'Validation Error',
        message: 'Age must be a number between 0 and 150',
        field: 'age'
      });
    }
    
    const users = readUsers();
    
    // Check for duplicate email
    const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'Conflict',
        message: 'User with this email already exists',
        field: 'email'
      });
    }
    
    // Create new user
    const newUser = {
      id: getNextId(users),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      ...(age !== undefined && { age }),
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    
    // Write to file
    if (!writeUsers(users)) {
      return res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to save user'
      });
    }
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to create user'
    });
  }
});

// PUT /api/users/:id - Update user (full update)
app.put('/api/users/:id', (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { name, email, age } = req.body;
    
    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Bad Request',
        message: 'Name and email are required fields',
        requiredFields: ['name', 'email']
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(422).json({
        success: false,
        error: 'Validation Error',
        message: 'Invalid email format',
        field: 'email'
      });
    }
    
    // Age validation (if provided)
    if (age !== undefined && (typeof age !== 'number' || age < 0 || age > 150)) {
      return res.status(422).json({
        success: false,
        error: 'Validation Error',
        message: 'Age must be a number between 0 and 150',
        field: 'age'
      });
    }
    
    const users = readUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `User with ID ${userId} not found`
      });
    }
    
    // Check for duplicate email (excluding current user)
    const existingUser = users.find(u => 
      u.email.toLowerCase() === email.toLowerCase() && u.id !== userId
    );
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'Conflict',
        message: 'Another user with this email already exists',
        field: 'email'
      });
    }
    
    // Update user (keep original createdAt)
    const updatedUser = {
      id: userId,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      ...(age !== undefined && { age }),
      createdAt: users[userIndex].createdAt,
      updatedAt: new Date().toISOString()
    };
    
    users[userIndex] = updatedUser;
    
    // Write to file
    if (!writeUsers(users)) {
      return res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to update user'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: updatedUser
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to update user'
    });
  }
});

// DELETE /api/users/:id - Delete user
app.delete('/api/users/:id', (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const users = readUsers();
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Not Found',
        message: `User with ID ${userId} not found`
      });
    }
    
    const deletedUser = users[userIndex];
    users.splice(userIndex, 1);
    
    // Write to file
    if (!writeUsers(users)) {
      return res.status(500).json({
        success: false,
        error: 'Internal Server Error',
        message: 'Failed to delete user'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: {
        id: userId,
        name: deletedUser.name,
        email: deletedUser.email
      }
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to delete user'
    });
  }
});

// GET /api/reset - Reset data to initial state (for testing)
app.get('/api/reset', (req, res) => {
  try {
    // Reset cache to null, forcing reload from file on next read
    usersCache = null;
    const users = readUsers();
    
    res.status(200).json({
      success: true,
      message: 'Data reset to initial state',
      count: users.length,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to reset data'
    });
  }
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Not Found',
    message: `Route ${req.method} ${req.url} not found`,
    availableEndpoints: [
      'GET /',
      'GET /api/users',
      'GET /api/users/:id',
      'POST /api/users',
      'PUT /api/users/:id',
      'DELETE /api/users/:id',
      'GET /api/reset'
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    message: 'An unexpected error occurred'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 API Learning 101 server running on port ${PORT}`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`📚 Documentation: https://github.com/nisalgunawardhana/api-learning-101`);
});

// Export for Vercel serverless function
module.exports = app;

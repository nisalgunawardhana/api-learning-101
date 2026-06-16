# HTTP Methods 🔧

## Overview

HTTP methods (also called HTTP verbs) define the action you want to perform on a resource. Think of them as commands that tell the server what you want to do.

## The CRUD Operations

Most APIs perform CRUD operations:

- **C**reate - Add new data
- **R**ead - Retrieve data
- **U**pdate - Modify existing data
- **D**elete - Remove data

HTTP methods map directly to these operations!

## Primary HTTP Methods

### 1. GET - Retrieve Data 📖

**Purpose**: Fetch data from the server (READ)

**Characteristics**:
- Safe (doesn't modify data)
- Idempotent (same result every time)
- Can be cached
- Parameters in URL

**Example**:
```http
GET /api/users
GET /api/users/1
GET /api/users?age=25&city=London
```

**Request**:
```http
GET /api/users/1 HTTP/1.1
Host: api-learning.nisalgunawardhana.com
```

**Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Use Cases**:
- Fetch list of items
- Get specific item details
- Search/filter data

---

### 2. POST - Create Data ➕

**Purpose**: Send data to create a new resource (CREATE)

**Characteristics**:
- Not safe (modifies data)
- Not idempotent (multiple calls create multiple resources)
- Data in request body
- Returns created resource

**Example**:
```http
POST /api/users
```

**Request**:
```http
POST /api/users HTTP/1.1
Host: api-learning.nisalgunawardhana.com
Content-Type: application/json

{
  "name": "Alice Smith",
  "email": "alice@example.com",
  "age": 28
}
```

**Response**:
```json
{
  "id": 2,
  "name": "Alice Smith",
  "email": "alice@example.com",
  "age": 28,
  "createdAt": "2026-01-11T10:30:00Z"
}
```

**Use Cases**:
- Create new user
- Submit a form
- Upload a file
- Place an order

---

### 3. PUT - Update Data (Complete) 🔄

**Purpose**: Replace entire resource (UPDATE - Full)

**Characteristics**:
- Not safe (modifies data)
- Idempotent (same result every time)
- Replaces entire resource
- All fields required

**Example**:
```http
PUT /api/users/1
```

**Request**:
```http
PUT /api/users/1 HTTP/1.1
Host: api-learning.nisalgunawardhana.com
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "age": 31
}
```

**Response**:
```json
{
  "id": 1,
  "name": "John Updated",
  "email": "john.updated@example.com",
  "age": 31,
  "updatedAt": "2026-01-11T11:00:00Z"
}
```

**Use Cases**:
- Complete profile update
- Replace configuration
- Full document update

---

### 4. PATCH - Update Data (Partial) 📝

**Purpose**: Partially update a resource (UPDATE - Partial)

**Characteristics**:
- Not safe (modifies data)
- May be idempotent
- Updates specific fields only
- Only changed fields required

**Example**:
```http
PATCH /api/users/1
```

**Request**:
```http
PATCH /api/users/1 HTTP/1.1
Host: api-learning.nisalgunawardhana.com
Content-Type: application/json

{
  "email": "newemail@example.com"
}
```

**Response**:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "newemail@example.com",
  "age": 30,
  "updatedAt": "2026-01-11T11:15:00Z"
}
```

**Use Cases**:
- Update single field (e.g., email)
- Toggle status
- Partial form updates

---

### 5. DELETE - Remove Data 🗑️

**Purpose**: Delete a resource (DELETE)

**Characteristics**:
- Not safe (modifies data)
- Idempotent (deleting same resource twice has same effect)
- Usually no request body
- May return deleted resource or status

**Example**:
```http
DELETE /api/users/1
```

**Request**:
```http
DELETE /api/users/1 HTTP/1.1
Host: api-learning.nisalgunawardhana.com
```

**Response**:
```json
{
  "message": "User deleted successfully",
  "deletedId": 1
}
```

**Use Cases**:
- Remove user account
- Delete post/comment
- Cancel order
- Clear cart

---

## Additional HTTP Methods

### 6. HEAD
- Like GET but returns only headers (no body)
- Check if resource exists
- Get metadata

### 7. OPTIONS
- Describes communication options
- CORS preflight requests
- Discover allowed methods

### 8. CONNECT
- Establish tunnel to server
- Used for HTTPS through proxy

### 9. TRACE
- Diagnostic/debugging
- Loop-back test

---

## Idempotency Explained

**Idempotent** means calling the operation multiple times produces the same result.

| Method | Idempotent? | Example |
|--------|-------------|---------|
| GET | ✅ Yes | Getting user 10 times returns same data |
| POST | ❌ No | Creating user 10 times creates 10 users |
| PUT | ✅ Yes | Updating user 10 times results in same final state |
| PATCH | ⚠️ Maybe | Depends on implementation |
| DELETE | ✅ Yes | Deleting user 10 times - user is still gone |

---

## Method Comparison

### PUT vs PATCH

**PUT** - Complete Replacement:
```json
// Original
{"id": 1, "name": "John", "email": "john@example.com", "age": 30}

// PUT Request
{"name": "Jane", "email": "jane@example.com"}

// Result - age is removed!
{"id": 1, "name": "Jane", "email": "jane@example.com"}
```

**PATCH** - Partial Update:
```json
// Original
{"id": 1, "name": "John", "email": "john@example.com", "age": 30}

// PATCH Request
{"email": "jane@example.com"}

// Result - other fields preserved
{"id": 1, "name": "John", "email": "jane@example.com", "age": 30}
```

### POST vs PUT

**POST** - Create (server assigns ID):
```http
POST /api/users
Body: {"name": "Alice"}
Response: {"id": 5, "name": "Alice"}  // ID assigned by server
```

**PUT** - Create or Update (client specifies ID):
```http
PUT /api/users/5
Body: {"name": "Alice"}
Response: {"id": 5, "name": "Alice"}  // ID in URL
```

---

## Best Practices

### 1. **Use Correct Method**
- Don't use GET for operations that modify data
- Don't use POST when PUT is more appropriate

### 2. **Return Appropriate Data**
- GET: Return the resource
- POST: Return the created resource
- PUT/PATCH: Return the updated resource
- DELETE: Return success message or deleted resource

### 3. **Be Consistent**
- Follow REST conventions
- Use plural nouns for collections (`/users` not `/user`)

### 4. **Handle Errors**
- Return appropriate status codes
- Provide error messages

---

## Quick Reference

| Method | CRUD | Safe | Idempotent | Request Body | Response Body |
|--------|------|------|------------|--------------|---------------|
| GET | Read | ✅ | ✅ | ❌ | ✅ |
| POST | Create | ❌ | ❌ | ✅ | ✅ |
| PUT | Update | ❌ | ✅ | ✅ | ✅ |
| PATCH | Update | ❌ | ⚠️ | ✅ | ✅ |
| DELETE | Delete | ❌ | ✅ | ❌ | ⚠️ |

---

## Try It Yourself!

Use our API to practice:

```bash
# GET - Fetch all users
curl https://api-learning.nisalgunawardhana.com/api/users

# POST - Create user
curl -X POST https://api-learning.nisalgunawardhana.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com"}'

# PUT - Update user
curl -X PUT https://api-learning.nisalgunawardhana.com/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name","email":"updated@example.com"}'

# DELETE - Remove user
curl -X DELETE https://api-learning.nisalgunawardhana.com/api/users/1
```

---

[← Previous: What is API](01-what-is-api.md) | [Next: Status Codes →](03-status-codes.md)

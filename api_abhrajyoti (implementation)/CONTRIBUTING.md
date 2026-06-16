# Contributing to API Learning 101 🤝

Thank you for your interest in API Learning 101! This guide will help you complete the task and submit your work.

## 📋 Task Overview

Complete the API Learning 101 testing challenge by:
1. Testing all 5 API request types using the public Postman collection
2. Capturing screenshots of successful tests
3. Submitting your work for review

## 🚀 Getting Started

### Step 1: Access the Postman Collection

Visit the public Postman workspace and fork the collection:
**[API Learning 101 - Public Collection](https://www.postman.com/cloudy-water-123799/workspace/api-learning)**

### Step 2: Test All API Endpoints

You must complete all 5 tests:

1. **GET All Users** - Fetch list of all users
2. **GET Single User** - Fetch one specific user by ID
3. **POST Create User** - Create a new user
4. **PUT Update User** - Update an existing user
5. **DELETE User** - Delete a user

### Step 3: Capture Screenshots

For each successful test, take a screenshot showing:
- ✅ Request URL
- ✅ HTTP method
- ✅ Response status code (200, 201, etc.)
- ✅ Response body with data

**Screenshot naming:**
```
01-get-all-users.png
02-get-single-user.png
03-post-create-user.png
04-put-update-user.png
05-delete-user.png
```

## 📤 Submission Process

### Step 1: Fork the Repository

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/YOUR-USERNAME/api-learning-101.git
cd api-learning-101
```

### Step 2: Create Your Screenshots Folder

```bash
# Create a folder with your GitHub username
mkdir docs/screenshots/screenshots-YOUR-USERNAME
```

### Step 3: Add Your Screenshots

Place all 5 screenshots in your folder:
```
docs/screenshots/screenshots-YOUR-USERNAME/
├── 01-get-all-users.png
├── 02-get-single-user.png
├── 03-post-create-user.png
├── 04-put-update-user.png
└── 05-delete-user.png
```

### Step 4: Create a Pull Request

```bash
git add docs/screenshots/screenshots-YOUR-USERNAME/
git commit -m "Add API testing screenshots - YOUR-USERNAME"
git push origin main
```

Then create a Pull Request on GitHub with:
- **Title**: `[SUBMISSION] API Testing - YOUR-USERNAME`
- **Description**: Brief summary of your testing

### Step 5: Submit the Issue Form

1. Go to **Issues** → **New Issue**
2. Select **📝 Task Submission** template
3. Fill in all required fields:
   - Your full name
   - GitHub username
   - T-shirt size (for rewards!)
   - Pull Request number
   - Screenshot checklist
4. Click **Submit new issue**

## ✅ What Happens Next?

1. **Automatic Assignment**: Your issue is automatically assigned to @nisalgunawardhana
2. **Pending Review Label**: Issue gets labeled with 🟡 `pending review`
3. **Review Process**: Your screenshots and PR will be reviewed (2-3 business days)
4. **Approval**: When approved by @nisalgunawardhana:
   - Issue gets labeled ✅ `approved` and 🎓 `completed`
   - You receive a congratulations comment
   - Completion badges are awarded
   - Your t-shirt details are processed

## 🏆 Badges & Rewards

### Everyone Receives:
- ✅ **Submission Approved Badge**
- 🎓 **API Learning 101 Completion Badge**

### Random Winners Receive:
- 👕 **Exclusive T-Shirt** (winners selected randomly from all approved submissions)
- 🎁 **Postman Swags** (bonus prizes)

### 🎯 Increase Your Chances to Win!

Share your completion on social media to get more chances:
1. Post about completing API Learning 101
2. Tag **@NisalGunawardhana** and **@Postman**
3. Use hashtag **#APILearning101**
4. Include your completion badges

**The more engagement, the better your chances!**

## ❓ FAQ

### Q: Can I test locally instead of using the production API?
A: The submission requires using the production API (`https://api-learning.nisalgunawardhana.com`). Local testing is optional but not required for submission.

### Q: What if I make a mistake in my screenshots?
A: You can update your PR with corrected screenshots before the review is complete.

### Q: How long does the review take?
A: Reviews typically take 2-3 business days. You'll be notified via the issue when complete.

### Q: Can I submit multiple times?
A: Yes, but only one submission per person will be counted for badges.

### Q: What if my request fails?
A: Ensure you're using the correct URL from the public Postman collection. If the API is down, please open an issue.

## 📞 Need Help?

- **Questions**: Open an issue with the question label
- **Technical Issues**: Check existing issues or create a new one
- **Contact**: Tag @nisalgunawardhana in your issue

---

**Good luck with your submission!** 🎉

Have an idea? We'd love to hear it!

1. Check [existing feature requests](https://github.com/nisalgunawardhana/api-learning-101/issues?q=is%3Aissue+label%3Aenhancement)
2. Create a new issue using the **Feature Request** template
3. Explain:
   - What problem it solves
   - How it would work
   - Why it's beneficial

### 3. Improving Documentation 📚

Documentation is crucial for learning!

**You can help by**:
- Fixing typos
- Clarifying explanations
- Adding examples
- Updating outdated information
- Creating tutorials

### 4. Contributing Code 💻

**Areas to contribute**:
- Backend API improvements
- Error handling enhancements
- New features
- Performance optimizations
- Test coverage

### 5. Creating Learning Resources 📖

Help others learn!

- Write tutorials
- Create video guides
- Add more examples
- Explain concepts
- Share best practices

## Getting Started

### Prerequisites

- Git
- Node.js 18+
- GitHub account
- Postman (for testing)

### Fork and Clone

1. **Fork the repository**:
   - Click "Fork" button on GitHub
   - This creates your copy

2. **Clone your fork**:
```bash
git clone https://github.com/YOUR-USERNAME/api-learning-101.git
cd api-learning-101
```

3. **Add upstream remote**:
```bash
git remote add upstream https://github.com/nisalgunawardhana/api-learning-101.git
```

4. **Install dependencies**:
```bash
cd backend
npm install
```

5. **Start development server**:
```bash
npm run dev
```

## Development Workflow

### 1. Create a Branch

```bash
# Update your fork
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name
```

**Branch naming**:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `test/` - Tests

Examples:
- `feature/add-pagination`
- `fix/email-validation`
- `docs/update-readme`

### 2. Make Changes

**Best practices**:
- ✅ Make small, focused commits
- ✅ Write clear commit messages
- ✅ Test your changes
- ✅ Follow coding standards
- ✅ Update documentation

**Commit message format**:
```
<type>: <short description>

<detailed description if needed>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
```bash
git commit -m "feat: add pagination to user list endpoint"
git commit -m "fix: correct email validation regex"
git commit -m "docs: update API documentation with examples"
```

### 3. Test Your Changes

**Before submitting**:

1. **Run the server**:
```bash
npm start
```

2. **Test all endpoints**:
   - Import Postman collection
   - Run all tests
   - Verify responses

3. **Check for errors**:
   - No console errors
   - Proper error handling
   - Valid status codes

4. **Verify documentation**:
   - Update if needed
   - Ensure clarity
   - Add examples

### 4. Push Changes

```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template:
   - Clear description
   - Related issue number
   - List of changes
   - Testing done
   - Screenshots (if applicable)

4. Submit PR

## Submission Process

### For Learning Submissions

If you're submitting work for review (students, contributors):

1. **Complete your work**:
   - Make all changes
   - Test thoroughly
   - Capture screenshots

2. **Create Pull Request**:
   - Use PR template
   - Link related issues
   - Provide clear description

3. **Create Submission Issue**:
   - Use "Submission" issue template
   - Reference your PR
   - Fill all required fields

4. **Wait for Review**:
   - Your submission will be assigned to @nisalgunawardhana
   - You may receive feedback
   - Make requested changes if needed

5. **Get Your Badge**:
   - Upon approval, receive contributor badge! 🏆
   - Badge automatically assigned when issue closed

### What Happens Next?

1. ✅ Submission automatically tagged "pending review"
2. 👤 Assigned to @nisalgunawardhana
3. 💬 Receive confirmation comment
4. 🔍 Work is reviewed
5. 💡 May receive feedback/questions
6. ✨ Upon approval, issue closed and badge awarded!

## Style Guidelines

### JavaScript/Node.js

```javascript
// Use const/let, not var
const users = readUsers();
let userId = 1;

// Use arrow functions
const getUser = (id) => {
  return users.find(u => u.id === id);
};

// Use template literals
const message = `User ${userId} not found`;

// Proper error handling
try {
  // code
} catch (error) {
  console.error('Error:', error);
}

// Clear function names
const createUser = (userData) => { ... };
const validateEmail = (email) => { ... };
```

### API Design

**Good endpoint**:
```javascript
GET    /api/users           // List users
POST   /api/users           // Create user
GET    /api/users/:id       // Get specific user
PUT    /api/users/:id       // Update user
DELETE /api/users/:id       // Delete user
```

**Bad endpoint**:
```javascript
GET    /api/getUsers        // Don't use verbs
POST   /api/createUser      // Don't use verbs
GET    /api/users/get/123   // Redundant
```

### Response Format

**Consistent structure**:

```javascript
// Success
{
  "success": true,
  "data": { ... }
}

// Error
{
  "success": false,
  "error": "Error Type",
  "message": "Human-readable message"
}
```

### Documentation

**Markdown standards**:
- Use headers properly (# ## ###)
- Add code blocks with language
- Include examples
- Keep line length reasonable
- Add links where helpful

## Code Review Process

### What Reviewers Look For

1. **Functionality**:
   - ✅ Code works as intended
   - ✅ No breaking changes
   - ✅ Handles edge cases

2. **Code Quality**:
   - ✅ Clean, readable code
   - ✅ Follows project standards
   - ✅ No unnecessary complexity
   - ✅ Proper error handling

3. **Testing**:
   - ✅ All tests pass
   - ✅ New features have tests
   - ✅ Bugs have regression tests

4. **Documentation**:
   - ✅ Code is commented
   - ✅ README updated if needed
   - ✅ API docs updated

### Addressing Feedback

- Respond to all comments
- Make requested changes
- Ask questions if unclear
- Push updates to same branch
- Re-request review when done

## Project Structure

```
api-learning-101/
├── backend/                 # Backend API
│   ├── api/
│   │   └── index.js        # Main API code
│   ├── data/
│   │   └── users.json      # Data storage
│   └── package.json
├── docs/                    # Learning resources
│   ├── 01-what-is-api.md
│   ├── 02-http-methods.md
│   ├── 03-status-codes.md
│   ├── 04-rest-principles.md
│   ├── 05-postman-guide.md
│   ├── TESTING.md
│   └── screenshots/
├── postman/                 # Postman collection
│   └── API-Learning-101.postman_collection.json
├── .github/                 # GitHub config
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
├── README.md
├── CONTRIBUTING.md
└── vercel.json             # Vercel config
```

## Testing Requirements

### Before Submitting PR

Run these tests:

```bash
# 1. Start server
npm start

# 2. Test each endpoint
# GET    /api/users
# GET    /api/users/1
# POST   /api/users
# PUT    /api/users/1
# DELETE /api/users/1

# 3. Test error cases
# - 404 errors
# - Validation errors
# - Duplicate emails

# 4. Run Postman collection
# Import and run entire collection
```

### Test Checklist

- [ ] All endpoints work
- [ ] Status codes are correct
- [ ] Response format is consistent
- [ ] Error handling works
- [ ] Edge cases handled
- [ ] No console errors
- [ ] Data persists correctly

## Common Issues

### Issue: Port 3000 in use

```bash
# Find process
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Issue: Changes not reflecting

```bash
# Restart server
# Or use nodemon for auto-reload
npm run dev
```

### Issue: Merge conflicts

```bash
# Update from upstream
git fetch upstream
git merge upstream/main

# Resolve conflicts
# Edit conflicted files
git add .
git commit -m "fix: resolve merge conflicts"
```

## Recognition

Contributors are recognized in:
- Contributors list (coming soon!)
- Contributor badges
- Special mentions in releases

## Getting Help

**Need help?**

- 📚 [Documentation](../README.md)
- 💬 [Discussions](https://github.com/nisalgunawardhana/api-learning-101/discussions)
- 🐛 [Issues](https://github.com/nisalgunawardhana/api-learning-101/issues)
- 📧 Contact: [@nisalgunawardhana](https://github.com/nisalgunawardhana)

## Resources

- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)
- [REST API Best Practices](https://restfulapi.net/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)

---

## Thank You! 🙏

Your contributions make this project better for everyone. Whether it's code, documentation, or feedback - every contribution matters!

**Happy Contributing!** 🚀

---

**Maintainer**: Nisal Gunawardhana ([@nisalgunawardhana](https://github.com/nisalgunawardhana))

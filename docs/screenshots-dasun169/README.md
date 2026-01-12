# API Testing Screenshots

This directory contains screenshots documenting all API endpoint tests.

## Test Coverage

### 1. Root Endpoint
- `01-root-endpoint.png` - API information

### 2. Get All Users
- `02-get-all-users.png` - List of all users

### 3. Get User by ID
- `03-get-user-by-id.png` - Successful user retrieval
- `04-get-user-404.png` - User not found error

### 4. Create User
- `05-create-user-success.png` - Successful user creation (201)
- `06-create-user-validation-error.png` - Validation error (422)
- `07-create-user-duplicate-email.png` - Duplicate email error (409)
- `08-create-user-missing-fields.png` - Missing fields error (400)

### 5. Update User
- `09-update-user-success.png` - Successful update (200)
- `10-update-user-not-found.png` - User not found (404)
- `11-update-user-validation.png` - Validation error (422)

### 6. Delete User
- `12-delete-user-success.png` - Successful deletion (200)
- `13-delete-user-not-found.png` - User not found (404)

## How to Add Screenshots

### Using Postman

1. **Execute Request**: Send the API request in Postman
2. **Capture Response**: Make sure response is visible
3. **Screenshot**: 
   - Mac: `Cmd + Shift + 4` → Select area
   - Windows: `Win + Shift + S` → Select area
4. **Save**: Save with descriptive filename
5. **Add Here**: Place in this directory

### What to Capture

Include in screenshot:
- ✅ Request URL
- ✅ HTTP Method
- ✅ Request Headers (if relevant)
- ✅ Request Body (if POST/PUT)
- ✅ Status Code
- ✅ Response Body
- ✅ Response Time

### Naming Convention

Format: `##-description.png`

Examples:
- `01-root-endpoint.png`
- `05-create-user-success.png`
- `10-update-user-not-found.png`

## Testing Instructions

### Step 1: Import Postman Collection

1. Open Postman
2. Click **Import**
3. Select `postman/API-Learning-101.postman_collection.json`
4. Import both environment files

### Step 2: Set Environment

1. Click environment dropdown (top-right)
2. Select **API Learning 101 - Development** (for local testing)
3. Or select **API Learning 101 - Production** (for live API)

### Step 3: Run Tests

1. **Individual Request**: 
   - Click request
   - Click **Send**
   - Verify response
   - Take screenshot

2. **Entire Collection**:
   - Click collection name
   - Click **Run**
   - Select all requests
   - Click **Run API Learning 101**
   - Review results
   - Screenshot summary

### Step 4: Test Error Cases

1. **404 Not Found**:
   - GET `/api/users/9999`
   - Should return 404

2. **Validation Error**:
   - POST `/api/users`
   - Body: `{"name": "Test", "email": "invalid-email"}`
   - Should return 422

3. **Duplicate Email**:
   - POST `/api/users` twice with same email
   - Second request should return 409

4. **Missing Fields**:
   - POST `/api/users`
   - Body: `{"name": "Test"}`
   - Should return 400

## Test Results Template

After testing, document results:

```markdown
## Test Execution: [Date]

### Environment
- Base URL: http://localhost:3000
- Postman Version: [version]
- Node Version: [version]

### Results

| Endpoint | Method | Expected | Actual | Status | Screenshot |
|----------|--------|----------|--------|--------|------------|
| / | GET | 200 | 200 | ✅ | 01-root-endpoint.png |
| /api/users | GET | 200 | 200 | ✅ | 02-get-all-users.png |
| /api/users/:id | GET | 200 | 200 | ✅ | 03-get-user-by-id.png |
| ... | ... | ... | ... | ... | ... |

### Issues Found
- None / List any issues

### Notes
- All tests passed successfully
- Response times < 100ms
```

## Automated Testing

The Postman collection includes automated tests. Check **Test Results** tab after running requests.

### Example Tests

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('data');
});
```

## Contributing Screenshots

When submitting your work:

1. ✅ Test all endpoints
2. ✅ Capture screenshots of each test
3. ✅ Name files properly
4. ✅ Add to this directory
5. ✅ Update this README if needed
6. ✅ Reference in your submission issue

---

**Happy Testing!** 🚀

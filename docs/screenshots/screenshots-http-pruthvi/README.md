# Screenshots for http-pruthvi

This directory contains the 5 required screenshots for the API Learning 101 assignment submission, representing tests of the 5 REST API endpoints against the live API.

## Verified Endpoints & Captured Files

### 1. GET All Users
- **Filename**: `01-get-all-users.png`
- **Method / URL**: `GET https://api-learning.nisalgunawardhana.com/api/users`
- **Verified Status**: `200 OK`
- **Description**: Fetches all active users from the in-memory cache database.

### 2. GET User by ID
- **Filename**: `02-get-single-user.png`
- **Method / URL**: `GET https://api-learning.nisalgunawardhana.com/api/users/1`
- **Verified Status**: `200 OK`
- **Description**: Retrieves user details matching ID `1` (John Doe).

### 3. POST Create User
- **Filename**: `03-post-create-user.png`
- **Method / URL**: `POST https://api-learning.nisalgunawardhana.com/api/users`
- **Verified Status**: `201 Created`
- **Description**: Registers a new user (`Pruthvi Raj`, email: `pruthvi@example.com`, age: `23`) and generates a new sequential ID.

### 4. PUT Update User
- **Filename**: `04-put-update-user.png`
- **Method / URL**: `PUT https://api-learning.nisalgunawardhana.com/api/users/1`
- **Verified Status**: `200 OK`
- **Description**: Performs a complete update on an existing user (ID `1`), modifying their details.

### 5. DELETE User
- **Filename**: `05-delete-user.png`
- **Method / URL**: `DELETE https://api-learning.nisalgunawardhana.com/api/users/4`
- **Verified Status**: `200 OK`
- **Description**: Permanently purges a user from the cache by ID.

---
*Created dynamically using the custom [API Testing Dashboard](../../../api-tester.html) by Antigravity AI.*

# HTTP Status Codes 📊

## Overview

HTTP status codes are three-digit numbers returned by the server to indicate the result of an HTTP request. They tell you whether your request was successful, failed, or requires additional action.

## Status Code Categories

Status codes are grouped into five categories:

| Category | Range | Meaning |
|----------|-------|---------|
| **1xx** | 100-199 | Informational - Request received, continuing |
| **2xx** | 200-299 | Success - Request successfully received and processed |
| **3xx** | 300-399 | Redirection - Further action needed |
| **4xx** | 400-499 | Client Error - Request contains bad syntax or cannot be fulfilled |
| **5xx** | 500-599 | Server Error - Server failed to fulfill valid request |

---

## 2xx Success Codes ✅

### 200 OK
**Most common success response**

- Request succeeded
- Response body contains requested data
- Used for successful GET, PUT, PATCH

**Example**:
```http
GET /api/users/1

Response:
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### 201 Created
**Resource successfully created**

- Used with POST requests
- Returns the newly created resource
- Should include Location header

**Example**:
```http
POST /api/users

Response:
HTTP/1.1 201 Created
Location: /api/users/5
Content-Type: application/json

{
  "id": 5,
  "name": "Alice Smith",
  "email": "alice@example.com",
  "createdAt": "2026-01-11T10:00:00Z"
}
```

---

### 204 No Content
**Success but no response body**

- Request succeeded
- No content to return
- Often used with DELETE

**Example**:
```http
DELETE /api/users/1

Response:
HTTP/1.1 204 No Content
```

---

## 3xx Redirection Codes 🔄

### 301 Moved Permanently
- Resource permanently moved to new URL
- Update bookmarks/links

### 302 Found
- Temporary redirect
- Use new URL for this request only

### 304 Not Modified
- Resource not modified since last request
- Use cached version

---

## 4xx Client Error Codes ❌

These indicate the client made a mistake.

### 400 Bad Request
**Request malformed or invalid**

- Missing required fields
- Invalid JSON syntax
- Wrong data types

**Example**:
```http
POST /api/users
Body: {"name": ""}  // Empty name

Response:
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Bad Request",
  "message": "Name is required and cannot be empty",
  "details": {
    "field": "name",
    "issue": "empty_value"
  }
}
```

---

### 401 Unauthorized
**Authentication required**

- No authentication provided
- Invalid credentials
- Expired token

**Example**:
```http
GET /api/admin/users

Response:
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer

{
  "error": "Unauthorized",
  "message": "Authentication required"
}
```

---

### 403 Forbidden
**No permission to access**

- Valid authentication but insufficient permissions
- Account suspended
- IP blocked

**Example**:
```http
DELETE /api/users/1

Response:
HTTP/1.1 403 Forbidden

{
  "error": "Forbidden",
  "message": "You don't have permission to delete users"
}
```

---

### 404 Not Found
**Resource doesn't exist**

- Wrong URL
- Resource deleted
- ID doesn't exist

**Example**:
```http
GET /api/users/9999

Response:
HTTP/1.1 404 Not Found

{
  "error": "Not Found",
  "message": "User with ID 9999 not found"
}
```

---

### 405 Method Not Allowed
**HTTP method not supported for this endpoint**

**Example**:
```http
PATCH /api/users

Response:
HTTP/1.1 405 Method Not Allowed
Allow: GET, POST

{
  "error": "Method Not Allowed",
  "message": "PATCH method is not allowed for this endpoint",
  "allowedMethods": ["GET", "POST"]
}
```

---

### 409 Conflict
**Request conflicts with current state**

- Duplicate resource
- Concurrent modification
- Business logic violation

**Example**:
```http
POST /api/users
Body: {"email": "existing@example.com"}

Response:
HTTP/1.1 409 Conflict

{
  "error": "Conflict",
  "message": "User with this email already exists"
}
```

---

### 422 Unprocessable Entity
**Validation error**

- Valid syntax but semantic errors
- Business rule violations
- Invalid data values

**Example**:
```http
POST /api/users
Body: {"name": "John", "email": "not-an-email", "age": -5}

Response:
HTTP/1.1 422 Unprocessable Entity

{
  "error": "Validation Error",
  "message": "The request contains invalid data",
  "errors": [
    {
      "field": "email",
      "message": "Must be a valid email address"
    },
    {
      "field": "age",
      "message": "Must be a positive number"
    }
  ]
}
```

---

### 429 Too Many Requests
**Rate limit exceeded**

- Too many requests in short time
- API quota exceeded

**Example**:
```http
GET /api/users

Response:
HTTP/1.1 429 Too Many Requests
Retry-After: 60

{
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Try again in 60 seconds",
  "limit": 100,
  "remaining": 0,
  "resetAt": "2026-01-11T11:00:00Z"
}
```

---

## 5xx Server Error Codes 🔥

These indicate the server encountered an error.

### 500 Internal Server Error
**Generic server error**

- Unhandled exception
- Server misconfiguration
- Bug in code

**Example**:
```http
GET /api/users

Response:
HTTP/1.1 500 Internal Server Error

{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "requestId": "abc123"
}
```

---

### 502 Bad Gateway
**Invalid response from upstream server**

- Proxy/gateway received invalid response
- Backend server down

---

### 503 Service Unavailable
**Server temporarily unavailable**

- Server maintenance
- Overloaded
- Temporary outage

**Example**:
```http
GET /api/users

Response:
HTTP/1.1 503 Service Unavailable
Retry-After: 3600

{
  "error": "Service Unavailable",
  "message": "Server is under maintenance",
  "estimatedDowntime": "1 hour"
}
```

---

### 504 Gateway Timeout
**Upstream server didn't respond in time**

- Backend server too slow
- Network issues

---

## Quick Reference Table

### Most Common Status Codes

| Code | Name | When to Use |
|------|------|-------------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST (resource created) |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid request syntax/data |
| 401 | Unauthorized | Authentication missing/invalid |
| 403 | Forbidden | No permission |
| 404 | Not Found | Resource doesn't exist |
| 409 | Conflict | Duplicate resource |
| 422 | Unprocessable Entity | Validation error |
| 500 | Internal Server Error | Server-side error |
| 503 | Service Unavailable | Server down/maintenance |

---

## Choosing the Right Status Code

### For POST (Create)
- ✅ `201 Created` - Success
- ❌ `400 Bad Request` - Invalid data
- ❌ `409 Conflict` - Duplicate resource
- ❌ `422 Unprocessable Entity` - Validation error

### For GET (Read)
- ✅ `200 OK` - Success
- ❌ `404 Not Found` - Resource doesn't exist
- ❌ `401 Unauthorized` - Authentication required

### For PUT/PATCH (Update)
- ✅ `200 OK` - Success with body
- ✅ `204 No Content` - Success without body
- ❌ `404 Not Found` - Resource doesn't exist
- ❌ `400 Bad Request` - Invalid data
- ❌ `422 Unprocessable Entity` - Validation error

### For DELETE
- ✅ `200 OK` - Success with response body
- ✅ `204 No Content` - Success without body
- ❌ `404 Not Found` - Resource doesn't exist

---

## Best Practices

### 1. **Be Specific**
Don't just use 200 and 500. Use appropriate codes:
- ❌ Return 200 when resource not found
- ✅ Return 404 when resource not found

### 2. **Include Error Details**
Always provide helpful error messages:

```json
{
  "error": "Validation Error",
  "message": "The request contains invalid data",
  "errors": [
    {
      "field": "email",
      "message": "Must be a valid email address",
      "value": "not-an-email"
    }
  ],
  "requestId": "abc123",
  "timestamp": "2026-01-11T10:00:00Z"
}
```

### 3. **Be Consistent**
Use the same error format across your API:

```json
{
  "error": "Error Type",
  "message": "Human-readable message",
  "details": { /* Additional context */ }
}
```

### 4. **Don't Expose Sensitive Info**
❌ Bad:
```json
{
  "error": "Database connection failed: MySQL server at 192.168.1.100:3306"
}
```

✅ Good:
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "requestId": "abc123"
}
```

---

## Status Codes in Our API

Our User Management API uses these status codes:

| Endpoint | Success | Errors |
|----------|---------|--------|
| `GET /api/users` | 200 OK | 500 Internal Server Error |
| `GET /api/users/:id` | 200 OK | 404 Not Found |
| `POST /api/users` | 201 Created | 400 Bad Request, 422 Unprocessable Entity |
| `PUT /api/users/:id` | 200 OK | 404 Not Found, 400 Bad Request |
| `DELETE /api/users/:id` | 200 OK | 404 Not Found |

---

## Testing Status Codes

You can test status codes with curl:

```bash
# Check status code only
curl -I https://api-learning.nisalgunawardhana.com/api/users

# Show status code with response
curl -i https://api-learning.nisalgunawardhana.com/api/users

# Test 404
curl -i https://api-learning.nisalgunawardhana.com/api/users/9999

# Test 400 (bad request)
curl -X POST https://api-learning.nisalgunawardhana.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"invalid": "data"}' \
  -i
```

---

## Visual Guide

```
Client Request
     ↓
┌────────────┐
│   Server   │
└────────────┘
     ↓
Decision Time!
     ↓
┌────────────────────────────────┐
│  Did server understand?        │
│  NO → 4xx (Client Error)       │
│  YES → Continue                │
└────────────────────────────────┘
     ↓
┌────────────────────────────────┐
│  Could server process it?      │
│  NO → 5xx (Server Error)       │
│  YES → Continue                │
└────────────────────────────────┘
     ↓
┌────────────────────────────────┐
│  Was it successful?            │
│  YES → 2xx (Success)           │
└────────────────────────────────┘
```

---

[← Previous: HTTP Methods](02-http-methods.md) | [Next: REST Principles →](04-rest-principles.md)

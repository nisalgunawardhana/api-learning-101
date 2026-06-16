# REST Principles 🏗️

## What is REST?

**REST** stands for **Representational State Transfer**. It's an architectural style for designing networked applications, particularly web services.

REST was defined by Roy Fielding in his 2000 doctoral dissertation. It's not a protocol or standard, but a set of principles and constraints.

## Why REST?

- **Simplicity** - Easy to understand and implement
- **Scalability** - Can handle many clients
- **Statelessness** - Each request is independent
- **Performance** - Can be cached effectively
- **Flexibility** - Works with any data format

---

## The 6 REST Principles

### 1. Client-Server Architecture 🖥️↔️🖥️

**Separation of concerns** between the user interface and data storage.

**Benefits**:
- Frontend and backend can evolve independently
- Different teams can work in parallel
- Improved portability

**Example**:
```
Client (Web App) ←→ Server (REST API) ←→ Database
Client (Mobile App) ←→ Server (REST API) ←→ Database
```

Multiple clients can use the same API!

---

### 2. Stateless 🚫💾

**Each request must contain all information needed** to process it. The server doesn't store client context between requests.

**What this means**:
- No session state on the server
- Each request is independent
- All context must be in the request

**Example - Stateless** ✅:
```http
# Request 1
GET /api/users/1
Authorization: Bearer token123

# Request 2 (independent)
PUT /api/users/1
Authorization: Bearer token123
Content-Type: application/json

{"name": "Updated Name"}
```

**Example - NOT Stateless** ❌:
```http
# Request 1
POST /api/login
{"username": "john", "password": "pass123"}

# Request 2 (depends on login state)
GET /api/users/me
# Server remembers you're logged in - NOT RESTful!
```

**Benefits**:
- Easier to scale (no session synchronization)
- More reliable (no lost sessions)
- Simpler server logic

**Trade-off**:
- More data per request (auth token each time)

---

### 3. Cacheable 💾

**Responses must indicate if they can be cached** to improve performance.

**Cache Headers**:
```http
HTTP/1.1 200 OK
Cache-Control: max-age=3600
ETag: "abc123"
Last-Modified: Wed, 11 Jan 2026 10:00:00 GMT

{
  "id": 1,
  "name": "John Doe"
}
```

**Benefits**:
- Reduced server load
- Faster response times
- Less bandwidth usage

**What can be cached**:
- ✅ GET requests (read-only)
- ❌ POST, PUT, DELETE (modify data)

**Example**:
```http
# First request - server processes
GET /api/users/1
Response: 200 OK (from server, slow)

# Second request - cached
GET /api/users/1
Response: 200 OK (from cache, fast!)
```

---

### 4. Uniform Interface 📐

**Consistent, predictable structure** for all API endpoints.

This is the most important constraint! It includes:

#### a) Resource-Based URLs

Resources are nouns (not verbs):
```
✅ /api/users          # Good - noun
❌ /api/getUsers       # Bad - verb

✅ /api/users/1        # Good
❌ /api/getUserById/1  # Bad

✅ /api/users/1/posts  # Good - relationship
❌ /api/users/1/getPosts  # Bad
```

#### b) HTTP Methods for Actions

Use HTTP methods (GET, POST, PUT, DELETE), not URLs:
```
✅ GET    /api/users        # Get all users
✅ GET    /api/users/1      # Get user 1
✅ POST   /api/users        # Create user
✅ PUT    /api/users/1      # Update user 1
✅ DELETE /api/users/1      # Delete user 1

❌ GET    /api/deleteUser/1  # Bad - action in URL
❌ POST   /api/createUser    # Bad - action in URL
```

#### c) Standard Representations

Use consistent data formats:
```json
// User resource format
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2026-01-11T10:00:00Z"
}
```

#### d) HATEOAS (Hypermedia)

Include links to related resources:
```json
{
  "id": 1,
  "name": "John Doe",
  "links": {
    "self": "/api/users/1",
    "posts": "/api/users/1/posts",
    "friends": "/api/users/1/friends"
  }
}
```

---

### 5. Layered System 🏗️

**Architecture can have multiple layers**, and each layer only knows about adjacent layers.

**Example Architecture**:
```
Client → Load Balancer → API Gateway → Application Server → Database
```

**Benefits**:
- Security (firewall layer)
- Scalability (load balancing)
- Caching (proxy layer)
- Legacy system integration

Client doesn't need to know about these layers!

---

### 6. Code on Demand (Optional) 📦

**Server can send executable code** to the client.

This is the only optional constraint.

**Examples**:
- JavaScript sent to browser
- Applets
- Scripts

Not commonly used in modern REST APIs.

---

## RESTful Resource Naming

### Best Practices

#### 1. Use Nouns, Not Verbs
```
✅ /users
✅ /products
✅ /orders

❌ /getUsers
❌ /createProduct
❌ /deleteOrder
```

#### 2. Use Plural Nouns
```
✅ /users
✅ /products

❌ /user
❌ /product
```

#### 3. Use Hierarchical Structure
```
✅ /users/1/posts          # Posts by user 1
✅ /users/1/posts/5        # Post 5 by user 1
✅ /categories/3/products  # Products in category 3
```

#### 4. Use Lowercase
```
✅ /api/users
✅ /api/user-profiles

❌ /api/Users
❌ /api/UserProfiles
```

#### 5. Use Hyphens, Not Underscores
```
✅ /api/user-profiles
✅ /api/order-items

❌ /api/user_profiles
❌ /api/order_items
```

#### 6. Don't Use File Extensions
```
✅ /api/users
✅ /api/users/1

❌ /api/users.json
❌ /api/users/1.xml
```

Use `Accept` header instead:
```http
GET /api/users
Accept: application/json
```

#### 7. Use Query Parameters for Filtering
```
✅ /api/users?status=active&age=25
✅ /api/products?category=electronics&sort=price

❌ /api/users/active/age/25
❌ /api/products/electronics/sortByPrice
```

---

## RESTful URL Examples

### Good Examples ✅

```
# Collections
GET    /api/users                    # Get all users
POST   /api/users                    # Create user

# Specific Resource
GET    /api/users/1                  # Get user 1
PUT    /api/users/1                  # Update user 1
DELETE /api/users/1                  # Delete user 1

# Nested Resources
GET    /api/users/1/posts            # Get posts by user 1
GET    /api/users/1/posts/5          # Get post 5 by user 1

# Filtering
GET    /api/users?status=active      # Active users
GET    /api/products?category=books&price_max=50

# Sorting
GET    /api/users?sort=name          # Sort by name
GET    /api/products?sort=-price     # Sort by price descending

# Pagination
GET    /api/users?page=2&limit=10    # Page 2, 10 per page
```

### Bad Examples ❌

```
❌ GET    /api/getUsers
❌ POST   /api/createUser
❌ GET    /api/deleteUser/1
❌ GET    /api/user                  # Singular
❌ GET    /api/users/1/getPosts
❌ GET    /api/Users                 # Capital letter
❌ GET    /api/user_profiles         # Underscore
```

---

## HTTP Methods & REST

| Method | Collection (/users) | Specific (/users/1) |
|--------|---------------------|---------------------|
| GET | Get all users | Get user 1 |
| POST | Create new user | ❌ Not used |
| PUT | ❌ Not used | Update user 1 (full) |
| PATCH | ❌ Not used | Update user 1 (partial) |
| DELETE | ❌ Not used | Delete user 1 |

---

## REST vs Other Styles

### REST vs SOAP

| Feature | REST | SOAP |
|---------|------|------|
| Protocol | Architecture style | Protocol |
| Format | JSON, XML, etc. | XML only |
| Complexity | Simple | Complex |
| Performance | Faster | Slower |
| Standards | Flexible | Strict |

### REST vs GraphQL

| Feature | REST | GraphQL |
|---------|------|----------|
| Endpoints | Multiple | Single |
| Data Fetching | Fixed structure | Flexible queries |
| Over-fetching | Common | Rare |
| Under-fetching | Common | Rare |
| Learning Curve | Easy | Moderate |

---

## RESTful Response Format

### Consistent Structure

**Success Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "timestamp": "2026-01-11T10:00:00Z"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "User with ID 1 not found",
    "details": {
      "userId": 1
    }
  },
  "timestamp": "2026-01-11T10:00:00Z"
}
```

### List Responses

```json
{
  "success": true,
  "data": [
    {"id": 1, "name": "User 1"},
    {"id": 2, "name": "User 2"}
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  },
  "timestamp": "2026-01-11T10:00:00Z"
}
```

---

## REST API Best Practices Summary

### ✅ Do's

1. **Use nouns** for resources
2. **Use HTTP methods** for actions
3. **Return appropriate status codes**
4. **Version your API** (/api/v1/users)
5. **Use JSON** as default format
6. **Provide filtering and pagination**
7. **Include documentation**
8. **Handle errors gracefully**
9. **Use HTTPS**
10. **Implement authentication**

### ❌ Don'ts

1. **Don't use verbs** in URLs
2. **Don't ignore status codes**
3. **Don't return 200 OK** for errors
4. **Don't use sessions** (keep stateless)
5. **Don't expose internal structure**
6. **Don't ignore security**
7. **Don't break backward compatibility**
8. **Don't forget documentation**

---

## Our API's REST Compliance

Our User Management API follows REST principles:

✅ **Client-Server**: Web app/Postman ↔ API  
✅ **Stateless**: Each request is independent  
✅ **Cacheable**: GET requests can be cached  
✅ **Uniform Interface**: Consistent URL structure  
✅ **Layered**: Can add load balancer, cache  

**Endpoints**:
```
GET    /api/users        # Collection
GET    /api/users/:id    # Specific resource
POST   /api/users        # Create
PUT    /api/users/:id    # Update
DELETE /api/users/:id    # Delete
```

---

## Testing REST Principles

You can verify REST principles:

```bash
# Test statelessness - each request independent
curl -X POST https://api-learning.nisalgunawarchana.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test"}'

# Test uniform interface
curl https://api-learning.nisalgunawarchana.com/api/users/1

# Test caching
curl -I https://api-learning.nisalgunawarchana.com/api/users
# Look for Cache-Control header
```

---

## Further Reading

- Roy Fielding's Dissertation: [RESTful API Design](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)
- Richardson Maturity Model
- HATEOAS implementations
- API versioning strategies

---

[← Previous: Status Codes](03-status-codes.md) | [Next: Postman Guide →](05-postman-guide.md)

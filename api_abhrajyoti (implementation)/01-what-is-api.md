# What is an API? 🌐

## Introduction

**API** stands for **Application Programming Interface**. It's a set of rules and protocols that allows different software applications to communicate with each other.

## Real-World Analogy

Think of an API like a waiter in a restaurant:

1. **You (Client)** - Look at the menu and decide what you want
2. **Waiter (API)** - Takes your order to the kitchen
3. **Kitchen (Server)** - Prepares your food
4. **Waiter (API)** - Brings your food back to you

The waiter is the intermediary that communicates between you and the kitchen, just like an API communicates between applications!

## Types of APIs

### 1. **REST APIs** (What we're learning!)
- Uses HTTP methods
- Stateless communication
- JSON data format
- Most common type

### 2. **SOAP APIs**
- XML-based
- More complex
- Used in enterprise systems

### 3. **GraphQL APIs**
- Query language
- Request exactly what you need
- Single endpoint

### 4. **WebSocket APIs**
- Real-time communication
- Two-way connection
- Used for chat apps, live updates

## Why Use APIs?

### 1. **Separation of Concerns**
- Frontend and backend can be developed independently
- Different teams can work in parallel

### 2. **Reusability**
- One API can serve multiple applications
- Web, mobile, desktop can use the same API

### 3. **Security**
- Hide internal implementation
- Control access to data

### 4. **Scalability**
- Easier to scale systems
- Can update backend without changing frontend

## API Components

### 1. **Endpoint**
The URL where the API can be accessed:
```
https://api-learning.nisalgunawardhana.com/api/users
```

### 2. **Method**
The HTTP verb (GET, POST, PUT, DELETE)

### 3. **Headers**
Metadata about the request:
```
Content-Type: application/json
Authorization: Bearer token123
```

### 4. **Request Body**
Data sent to the server:
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### 5. **Response**
Data received from the server:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2026-01-11T10:00:00Z"
}
```

### 6. **Status Code**
Indicates success or failure (200, 404, 500, etc.)

## Example: Weather API

Imagine you're building a weather app:

```javascript
// Request
GET https://api.weather.com/current?city=London

// Response
{
  "temperature": 15,
  "condition": "Cloudy",
  "humidity": 70
}
```

Your app doesn't need to know how the weather data is collected or stored. The API handles all that complexity!

## REST API Characteristics

REST (Representational State Transfer) APIs have specific characteristics:

1. **Client-Server Architecture** - Separated concerns
2. **Stateless** - Each request is independent
3. **Cacheable** - Responses can be cached
4. **Uniform Interface** - Consistent structure
5. **Layered System** - Can have multiple layers

## JSON Format

APIs commonly use JSON (JavaScript Object Notation) for data exchange:

```json
{
  "user": {
    "id": 1,
    "name": "Alice",
    "age": 25,
    "isActive": true,
    "hobbies": ["reading", "coding", "gaming"]
  }
}
```

**Why JSON?**
- Human-readable
- Lightweight
- Supported by all programming languages
- Easy to parse

## Common Use Cases

1. **Social Media** - Posting, liking, commenting
2. **Payment Processing** - Stripe, PayPal
3. **Maps** - Google Maps API
4. **Authentication** - OAuth, login systems
5. **Data Retrieval** - News, weather, stocks

## Our Learning API

In this repository, we have a simple User Management API:

- Create users
- Read user data
- Update user information
- Delete users

All without a database - just a JSON file!

## Next Steps

Now that you understand what an API is, let's learn about:
- [HTTP Methods](02-http-methods.md) - How to interact with APIs
- [Status Codes](03-status-codes.md) - Understanding responses
- [REST Principles](04-rest-principles.md) - Best practices

---

[← Back to README](../README.md) | [Next: HTTP Methods →](02-http-methods.md)

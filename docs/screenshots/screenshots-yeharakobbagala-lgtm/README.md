# Test Execution

## Environment

* Base URL: https://api-learning.nisalgunawardhana.com
* Environment: Production

## Results

| Endpoint        | Method                  | Status |
| --------------- | ----------------------- | ------ |
| /               | GET                     | ✅ 200  |
| /api/users      | GET                     | ✅ 200  |
| /api/users/1    | GET                     | ✅ 200  |
| /api/users/9999 | GET                     | ✅ 404  |
| /api/users      | POST                    | ✅ 201  |
| /api/users      | POST (Validation Error) | ✅ 422  |
| /api/users      | POST (Duplicate Email)  | ✅ 409  |
| /api/users      | POST (Missing Fields)   | ✅ 400  |
| /api/users/:id  | PUT                     | ✅ 200  |
| /api/users/9999 | PUT                     | ✅ 404  |
| /api/users/:id  | PUT (Validation Error)  | ✅ 422  |
| /api/users/:id  | DELETE                  | ✅ 200  |
| /api/users/9999 | DELETE                  | ✅ 404  |

## Notes

* All required endpoints were tested.
* Success and error scenarios were verified.
* Screenshots were captured and uploaded.


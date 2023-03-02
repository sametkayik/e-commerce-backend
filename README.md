# E-Commerce App Backend

This is an e-commerce backend project developed using Express.js. JWT (JSON Web Token) authentication mechanism is used to manage user logins and the Crypto-js library is used for encryption and decryption operations. MongoDB is used as the database.

# Project Status
This is an ongoing project and is currently in active development. I am constantly working on new features and improvements to make the project better. Stay tuned for updates!

# API Reference for User Endpoints 

## Authentication

### Register User

Create a new user account.

```http
POST /api/auth/register
```

**Request Body**

```json
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "mypassword"
}
```

- username (string) - required, unique
- email (string) - required, unique
- password (string) - required

**Response Body**

```http
Status: 201 Created
```

```json
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "encryptedpassword",
  "_id": "60d970d72b62a46a78fdebb3",
  "createdAt": "2021-06-28T16:55:59.573Z",
  "__v": 0
}
```

### Login User

Authenticate user and return access token.

```http
POST /api/auth/login
```

**Request Body**

```json
{
  "username": "johndoe",
  "password": "mypassword"
}
```

**Parameters**

- username (string) - required
- password (string) - required

**Response Body**

```http
Status: 200 OK

```

```json
{
  "_id": "6149c66f9a904d0008037eb2",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "isAdmin": false,
  "createdAt": "2023-03-02T10:35:35.527Z",
  "__v": 0,
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Users

### Get All Users

Retrieve a list of users.

```http
GET /api/users
```
**Headers**

```
token = Bearer <token>
```

**Response Body**

```http
Status: 200 OK
```

```json
[
  {
    "_id": "6149c66f9a904d0008037eb2",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "isAdmin": false,
    "createdAt": "2023-03-02T10:35:35.527Z",
    "__v": 0
  },
  {
    "_id": "6149c6d39a904d0008037eb3",
    "username": "janedoe",
    "email": "janedoe@example.com",
    "isAdmin": false,
    "createdAt": "2023-03-02T10:37:31.310Z",
    "__v": 0
  }
]
```

### Get User by ID

Retrieve a user by ID.

```http
GET /api/users/:id
```

**Headers**

```
token = Bearer <token>
```

**Parameters**

- id (string) - required

**Response Body**

```http
Status: 200 OK
```

```json
{
  "_id": "6151b28a65d491630e96c82b",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "isAdmin": false,
  "createdAt": "2023-03-02T03:08:58.752Z",
  "updatedAt": "2023-03-02T03:08:58.752Z"
}
```

### Delete User by ID

Deletes a single user by ID.

```http
DELETE /api/users/:id
```

**Headers**

```
token = Bearer <token>
```

**Parameters**

- id (string) - required

**Response Body**

```http
Status: 200 OK
```

```json
{
    "User has been deleted."
}
```

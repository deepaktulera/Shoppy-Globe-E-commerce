# Shoppy-Globe Backend

Backend API for the Shoppy-Globe E-Commerce application built using Node.js, Express.js, and JWT Authentication.

## Features

* User Registration
* User Login
* JWT Authentication
* Product Management
* Cart Management
* RESTful API Architecture

## Tech Stack

* Node.js
* Express.js
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* nodemon

## Project Structure

```bash
Shoppy-Globe-Backend/
│
├── config/
│   └── database.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── product.controller.js
│   └── cart.controller.js
│
├── middleware/
│   └── protect.middleware.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Cart.js
│
├── routes/
│   ├── auth.routes.js
│   ├── product.routes.js
│   └── cart.routes.js
│
├── server.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/deepaktulera/Shoppy-Globe-E-commerce.git
```

Navigate to the project directory:

```bash
cd Shoppy-Globe-Backend
```

Install dependencies:

```bash
npm install
```

## Running the Server

Development Mode:

```bash
npm run dev
```

or

```bash
nodemon server.js
```

Production Mode:

```bash
npm start
```

## API Endpoints

### Authentication

#### Register User

```http
POST /auth/register
```

Request Body:

```json
{
  "username": "john123",
  "email": "john@example.com",
  "password": "Password@123"
}
```

#### Login User

```http
POST /auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

---

### Products

#### Get All Products

```http
GET /products
```

#### Get Product By ID

```http
GET /products/:id
```

---

### Cart

#### Get Cart Items

```http
GET /cart
```

Authorization Header:

```http
Authorization: JWT <token>
```

#### Add Product To Cart

```http
POST /cart
```

#### Remove Product From Cart

```http
DELETE /cart/:id
```

## Authentication

Protected routes require a valid JWT token.

Example:

```http
Authorization: JWT eyJhbGciOiJIUzI1NiIs...
```

## Database

The project uses MongoDB storage and Mongoose as the ODM.

## Author

Deepak


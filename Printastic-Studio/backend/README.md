# Printastic Studio Backend

This is the backend server for the Printastic Studio e-commerce application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/printastic
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

3. Start MongoDB:
Make sure MongoDB is installed and running on your system.

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product
- POST `/api/products` - Create product (admin only)
- PUT `/api/products/:id` - Update product (admin only)
- DELETE `/api/products/:id` - Delete product (admin only)

### Orders
- GET `/api/orders` - Get all orders (admin only)
- GET `/api/orders/my-orders` - Get user's orders
- GET `/api/orders/:id` - Get single order
- POST `/api/orders` - Create order
- PATCH `/api/orders/:id/status` - Update order status (admin only)
- PATCH `/api/orders/:id/cancel` - Cancel order

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## Error Handling

The API returns appropriate HTTP status codes and error messages in JSON format:
```json
{
  "message": "Error message",
  "error": "Detailed error information"
}
```

## Development

- The server uses Express.js as the web framework
- MongoDB with Mongoose for database operations
- JWT for authentication
- bcryptjs for password hashing
- cors for handling cross-origin requests 
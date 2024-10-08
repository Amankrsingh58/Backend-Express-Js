Backend Express.js API Repository
This repository contains backend code developed using Express.js. It includes various essential features for setting up a backend server with basic configurations, database connections, file uploading, and user authentication functionalities such as login, signup, password reset, and validation.

Features
Basic Server Setup: Initializes a basic Express server.
Database Connection: Configured to connect to a MongoDB database using Mongoose.
Port Listening: Listens on a specified port and handles error and success responses.
File Uploading: Allows uploading of files and storing them in specified directories.
User Authentication: Implements login and signup functionalities with secure password storage.
Forgot Password & Reset Token: Provides routes to handle forgot password requests and send reset tokens via email.
Validation: Validates user input for various fields (e.g., email format, password strength) during authentication.
Project Structure
bash
Copy code
/backend-express-api
├── /controllers
│   └── authController.js         # Handles authentication logic
├── /middleware
│   └── validationMiddleware.js   # Contains validation logic
├── /models
│   └── userModel.js              # User schema with Mongoose
├── /routes
│   └── authRoutes.js             # Defines routes for authentication
├── /uploads
│   └──                          # Folder for uploaded files
├── config.js                     # Database and server configuration
├── server.js                     # Main server setup
└── README.md
Getting Started
Prerequisites
Node.js and npm: Ensure you have Node.js and npm installed.
MongoDB: A MongoDB instance is required for database operations.
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/backend-express-api.git
cd backend-express-api
Install Dependencies

bash
Copy code
npm install
Environment Variables Create a .env file in the root directory and add the following:

plaintext
Copy code
PORT=5000
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
Run the Server

bash
Copy code
npm start
The server will start on http://localhost:5000 by default.

API Endpoints
Authentication
POST /api/auth/signup: Registers a new user.
POST /api/auth/login: Logs in an existing user and returns a JWT token.
POST /api/auth/forgot-password: Sends a reset token to the user’s email.
POST /api/auth/reset-password: Resets the user’s password.
File Uploading
POST /api/upload: Handles file upload with specified storage and validation.
Validation
Email and Password Validation: Ensures email format is correct and passwords meet strength requirements.
JWT Token Validation: Secure routes require a valid JWT token for access.
Technologies Used
Node.js and Express.js: Backend framework.
MongoDB and Mongoose: Database and object modeling.
bcrypt: Password hashing.
jsonwebtoken: JWT for secure authentication.
nodemailer: Email service for password reset.
Author
Developed by Aman Singh.

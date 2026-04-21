# rate_limiited_api

📌 Overview

This project implements a rate-limited API using Node.js, Express, and MongoDB.
It provides endpoints to accept user requests and track request statistics while enforcing a rate limit of 5 requests per user per minute.

⚙️ Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
In-memory rate limiting (Map)

📂 API Endpoints
🔹 POST /api/request - Accepts a request with rate limiting.
🔹 GET /api/stats - Returns total request count per user.

🛠️ Steps to Run the Project

1️⃣ Clone the repository
git clone <git-repo-link>
cd rate-limited-api
2️⃣ Install dependencies
npm install
3️⃣ Setup environment variables
Create a .env file:
PORT=5000
MONGO_URI=mongodb+srv://chouhanniki60_db_user:iiFNrkz3fonIOfYy@cluster0.qzayvgb.mongodb.net/?appName=Cluster0
4️⃣ Start MongoDB
Make sure MongoDB is running locally.
5️⃣ Run the server
npm run dev
Server will start on: http://localhost:5000
6️⃣ Test APIs (using Postman)
POST → http://localhost:5000/api/request
GET → http://localhost:5000/api/stats


🛠️ Design Decisions
1. Rate Limiting Approach
Implemented using an in-memory Map
Stores timestamps of requests per user
Filters requests within a 1-minute window
2. Why In-Memory?
Simple and fast for initial implementation
No external dependency required
Suitable for single-instance applications
3. MongoDB Usage
Stores request logs persistently
Enables aggregation for /stats endpoint
4. Separation of Concerns
Controllers → business logic
Middleware → rate limiting
Models → database schema
Routes → API endpoints


🚀 Improvements (If Given More Time)
🔹 1. Use Redis for Rate Limiting
Replace in-memory Map with Redis
Ensure atomic operations and distributed support
🔹 2. Deployment
Dockerize the app
Deploy on AWS / Azure 

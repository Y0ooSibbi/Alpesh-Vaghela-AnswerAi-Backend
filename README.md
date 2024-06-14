# Alpesh-Vaghela-AnswerAi-Backend

# AnswersAi Backend

## Project Overview

This is the backend service for AnswersAi, built with Node.js and Express.js. The service handles user authentication, question management, and integrates with the Anthropic AI API for generating answers.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Y0ooSibbi/Alpesh-Vaghela-AnswerAi-Backend
    cd Alpesh-Vaghela-AnswerAi-Backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Setup

1. Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    PORT=3000
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    ANTHROPIC_API_KEY=your_anthropic_api_key
    ```

2. Initialize Docker (Optional):
    ```bash
    docker build -t answersai-backend .
    docker run -p 3000:3000 --env-file .env answersai-backend
    ```

## Running the Application

1. Start the server:
    ```bash
    npm start
    ```

## Running Tests

1. Run the tests:
    ```bash
    npm test
    ```

## API Documentation

- **POST /api/questions**: Accept user question and return AI-generated answer.
- **GET /api/questions/:questionId**: Retrieve specific question and answer by question ID.
- **POST /api/users**: Create a new user account.
- **GET /api/users/:userId**: Retrieve a user profile with a given userId.
- **GET /api/users/:userId/questions**: Retrieve all questions asked by user with a given userId.

## Contact

For any queries, please contact [alpesh57678@gmail.com](mailto:alpesh57678@gmail.com).

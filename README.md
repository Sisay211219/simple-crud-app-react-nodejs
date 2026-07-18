# React Node.js CRUD Application

This repository contains a full-stack CRUD (Create, Read, Update, Delete) application built with React and Node.js. 

The application allows you to perform basic operations on a data set, making it a practical example for learning and understanding how to develop and deploy such applications.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- **Node.js**: (v16+ recommended)
- **npm**: Comes with Node.js
- **Git**: To clone and work with this project

## Installation and Local Usage

Follow these steps to run the application locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Saurabh-DevOpsVoyager77/simple-crud-app-react-nodejs.git
   cd simple-crud-app-react-nodejs/
   ```

2. **Run the Backend**:
   Open a terminal, navigate to the `backend` directory, install dependencies, and start the server:
   ```bash
   cd backend
   npm install
   npm start
   ```
   The backend server will start and listen at http://localhost:3333.

3. **Run the Frontend**:
   Open another terminal, navigate to the `frontend` directory, install dependencies, and start the React application:
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend app will start and automatically open in your browser at http://localhost:3000.

---

## Application Details

This CRUD application is designed to showcase how to create, retrieve, update, and delete items from a data source using React and Node.js.

### Frontend
The frontend is a user-friendly React-based interface allowing you to create, read, update, and delete user entries seamlessly. It accesses the backend on http://localhost:3333.

![image](https://github.com/Saurabh-DevOpsVoyager77/simple-crud-app-react-nodejs/assets/147520862/6c63c214-8b66-466e-990d-848dccf486f8)

### Backend
The backend is the backbone of the application, responsible for processing data requests, serving as the intermediary between the frontend and the SQLite database.

You can directly query the backend API at http://localhost:3333/api to examine the data.

![image](https://github.com/Saurabh-DevOpsVoyager77/simple-crud-app-react-nodejs/assets/147520862/f859c8ca-e7ce-4024-8f0f-57c5396ff64b)

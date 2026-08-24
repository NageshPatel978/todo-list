# Todo List

A full-stack Todo List application built with **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose**.

The application allows users to create and manage tasks with priorities and due dates. Todo data is stored persistently in MongoDB through a backend API built with Express.js.

## Preview

### User Interface

![Todo List User Interface](todo-preview.png/Screenshot%202026-08-25%20032245.png)

### MongoDB Database

![Todo List MongoDB Database](todo-preview.png/Screenshot%202026-08-25%20032201.png)

## Features

* Add new tasks
* Set task priority
* Set a due date
* Mark tasks as completed
* Delete tasks
* Perform CRUD operations on Todo data
* Persistent data storage using MongoDB
* Backend API using Node.js and Express.js
* MongoDB integration using Mongoose
* Mongoose schema for Todo data
* Responsive and clean user interface

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

## Application Architecture

```text
Frontend
   │
   │ HTTP Requests
   ▼
Express.js Server
   │
   │ Mongoose
   ▼
MongoDB Database
```

The frontend communicates with the Express.js server through HTTP requests. The server handles Todo operations and uses Mongoose to interact with the MongoDB database.

## Todo Data Model

Each Todo is stored with the following fields:

| Field       | Type    | Description       |
| ----------- | ------- | ----------------- |
| `title`     | String  | Name of the task  |
| `priority`  | String  | Task priority     |
| `date`      | String  | Due date          |
| `completed` | Boolean | Completion status |

Each document also receives a unique MongoDB `_id`.

## Project Structure

```text
todo-list/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── models/
│   └── todo.js
│
├── todo-preview.png/
│   ├── Screenshot 2026-08-25 032201.png
│   └── Screenshot 2026-08-25 032245.png
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* MongoDB
* Git

### 1. Clone the repository

```bash
git clone https://github.com/NageshPatel978/todo-list.git
```

### 2. Navigate to the project

```bash
cd todo-list
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure your MongoDB server is running.

### 5. Start the application

```bash
node server.js
```

The application can then be accessed through the local server URL configured in the project.

## Database

The application uses MongoDB to permanently store Todo data.

Mongoose is used to:

* Connect the Node.js application to MongoDB
* Define the Todo schema
* Create and manage Todo documents
* Perform database operations

### Example Todo Document

```json
{
  "title": "Learn React",
  "priority": "high",
  "date": "2026-10-24",
  "completed": true
}
```

## What I Learned

While building this project, I practiced:

* Building a frontend using HTML, CSS, and JavaScript
* DOM manipulation and event handling
* Creating a backend with Node.js
* Creating APIs using Express.js
* Sending requests between frontend and backend
* Connecting Node.js with MongoDB
* Using Mongoose for database interaction
* Creating MongoDB schemas with Mongoose
* Performing CRUD operations
* Working with JSON data
* Using Git and GitHub for version control

## Future Improvements

Possible improvements for future versions:

* User authentication
* Multiple user accounts
* Task editing
* Task filtering by priority
* Search functionality
* Sorting by due date
* Better error handling
* Loading states
* Environment variables for database configuration
* Deployment to a cloud platform

## Author

**Nagesh Patel**

GitHub: [@NageshPatel978](https://github.com/NageshPatel978)

⭐ If you like this project, consider giving the repository a star!

> **Full-Stack Todo List Application** — Built a task management application using HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose, implementing a backend API and persistent CRUD-based data storage.

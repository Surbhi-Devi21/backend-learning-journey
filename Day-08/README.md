# 📅 Day 08 - React & Express Integration

## 📖 Overview

Today I connected my **React Frontend** with my **Node.js + Express Backend**.

The frontend now communicates with the backend using **Axios**. Notes are fetched from MongoDB through REST APIs and rendered dynamically in React.

I also learned how forms work in React and how user input is sent to the backend using HTTP requests.

---

# 🚀 What I Built

- Connected React with Express Backend
- Fetched notes from MongoDB using Axios
- Rendered notes dynamically using `map()`
- Created a form to collect user input
- Learned how form submission works in React
- Connected the frontend with the backend running on **localhost:3000**

---

# 📂 Folder Structure

```
Day-08/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

# 📚 Concepts Learned

## React

- useState()
- useEffect()
- Component Re-rendering
- JSX
- Rendering Lists using `map()`
- Keys in React Lists
- Forms in React
- Event Handling
- `preventDefault()`
- Reading Form Data using `event.target.elements`

---

## Axios

- GET Request
- POST Request
- Sending data from React to Backend
- Receiving API Response

---

## Backend

- Express Routing
- REST APIs
- GET API
- POST API
- PATCH API
- DELETE API
- Connecting React with Express
- Serving JSON Responses

---

## MongoDB

- Fetching Notes
- Creating Notes
- Displaying Database Data on Frontend

---

# 🔄 Application Flow

```
User
   │
   ▼
React Form
   │
   ▼
Axios Request
   │
   ▼
Express Backend
   │
   ▼
MongoDB
   │
   ▼
JSON Response
   │
   ▼
React UI Updates
```

---

# 🧠 Key Learnings

- Why `useEffect()` is required for API calls
- How state updates trigger component re-rendering
- Difference between GET and POST requests
- How forms submit data in React
- Why `preventDefault()` is used
- How React communicates with a backend using Axios
- How data flows from MongoDB → Backend → React

---

# 📌 Technologies Used

- React
- Vite
- Axios
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 🎯 Outcome

Successfully integrated the frontend with the backend and displayed real-time data from MongoDB in the React application. This was my first complete full-stack integration where React, Express, and MongoDB worked together.

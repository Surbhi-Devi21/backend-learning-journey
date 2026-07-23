# 📅 Day 08 - Backend & React Integration

## 📖 Overview

Today I successfully connected my **React Frontend** with my **Node.js + Express Backend**.

I fetched notes from MongoDB using a GET API and displayed them dynamically in React using **Axios**, **useEffect()**, and **map()**.

This was my first complete Backend → Database → Frontend integration.

---

# 📂 Folder Structure

Day-08/
├── Backend/
│   ├── src/
│   ├── config/
│   ├── models/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md

---

# 🚀 What I Learned

## 1. JavaScript map()

- What `map()` is
- Why we use `map()`
- Difference between `map()` and `for` loop
- How `map()` iterates over arrays
- How it returns a new array

---

## 2. Rendering Lists in React

Learned how to render multiple notes using:

```jsx
notes.map((note, index) => (
    <div key={note._id}>
        <h2>{note.title}</h2>
        <p>{note.description}</p>
    </div>
))
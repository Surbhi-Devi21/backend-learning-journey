# 📅 Day 05 - HTTP Status Codes & JSON Responses

## 📚 What I Learned

Today I learned about **HTTP Status Codes** and how to send responses in **JSON format** using Express.js.

I also explored **MongoDB Atlas** and connected it with **MongoDB Compass** to understand how cloud databases work.



## 🚀 Topics Covered

### ✅ HTTP Status Codes
- **200 OK** → Request completed successfully.
- **201 Created** → Resource created successfully.
- **204 No Content** → Resource deleted successfully.
- **400 Bad Request** → Invalid request from the client.
- **404 Not Found** → Requested resource was not found.
- **500 Internal Server Error** → Server-side error.

### ✅ JSON Responses
Instead of sending plain text, I learned how to send responses in JSON format using:

```javascript
res.status(201).json({
  message: "Note added successfully"
})
```

### ✅ CRUD API Practice

I updated my Notes API to return proper status codes and JSON responses.

Implemented:
- ➕ Create a note (`POST`)
- 📖 Read all notes (`GET`)
- ❌ Delete a note (`DELETE`)
- ✏️ Update a note (`PATCH`)

### ✅ MongoDB Atlas

I learned how to:
- Create a MongoDB Atlas account.
- Create a free cluster.
- Create a database user.
- Allow network access (IP Whitelist).
- Generate the MongoDB connection string.

### ✅ MongoDB Compass

Successfully connected **MongoDB Atlas** with **MongoDB Compass** and explored the database connection.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Compass
- Postman

---

## 🎯 Outcome

By the end of Day 05, I understood:
- How HTTP Status Codes improve API responses.
- How to send structured JSON responses.
- How to build CRUD APIs using proper status codes.
- How MongoDB Atlas works as a cloud database.
- How to connect MongoDB Atlas with MongoDB Compass.
# 📅 Day 06 - MongoDB Atlas & Cluster Basics

## 📚 What I Learned

Today I explored the basics of **MongoDB Atlas** and understood how cloud databases work.

I learned about **Clusters**, **Databases**, **Collections**, and **Documents**, and how they are organized inside MongoDB.

---

## 🚀 Topics Covered

### ✅ MongoDB Atlas

- Created a free MongoDB Atlas Cluster.
- Selected the **Mumbai (ap-south-1)** region to reduce latency since my application is running from India.
- Created a database user with username and password.
- Configured Network Access (IP Whitelist) for development.

### ✅ MongoDB Cluster

Learned that a **Cluster** is the environment where MongoDB runs and stores one or more databases.

Hierarchy:

```text
Cluster
   │
   └── Database
         │
         └── Collection
               │
               └── Document
```

### ✅ MongoDB Compass

Successfully connected **MongoDB Compass** to my **MongoDB Atlas Cluster** using the connection string and explored the cloud database.

### ✅ Server Connection

Connected my **Node.js/Express Server** to the **MongoDB Atlas Cluster** using the MongoDB connection string. *(If you have started using `mongoose.connect()`.)*

### ✅ Latency

Learned that the distance between the client and the database server affects response time.

- Nearby server (Mumbai) → Lower latency
- Faraway server → Higher latency

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Compass
- Mongoose 

---

## 🎯 Outcome

By the end of Day 06, I understood:

- What a MongoDB Cluster is.
- The difference between Cluster, Database, Collection, and Document.
- Why choosing the **Mumbai region** helps reduce latency.
- How to connect **MongoDB Compass** with a **MongoDB Atlas Cluster**.
- How to connect my **Express Server** to **MongoDB Atlas** using the connection string.
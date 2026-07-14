const express = require("express");
const app = express();

app.get("/", (req , res) => {
  res.send("Hello World");
})

app.get("/about", (req , res) => {
  res.send("About Page");
})

app.get("/Home" , (req , res) => {
  res.send("Server is running successfully.  This is Home Page...   This project is built while learning Express.js.")
})

app.listen(3000); 
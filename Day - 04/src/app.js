const express = require("express");

const app = express(); //server created

const note = [];

app.use(express.json());

app.post("/notes" , (req , res) => {
  note.push(req.body)
 console.log(req.body)
 res.send("your notes is added successfully");

})

app.get("/notes" , (req , res) => {
   res.send(note);
})

module.exports = app; //exporting the server to be used in other files
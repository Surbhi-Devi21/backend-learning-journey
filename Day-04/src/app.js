const express = require("express");

const app = express(); //server created

const note = [];

app.use(express.json());


// POST method
app.post("/notes" , (req , res) => {
  note.push(req.body)
 console.log(req.body)
 res.send("your notes is added successfully");

})


// GET method 
app.get("/notes" , (req , res) => {
   res.send(note);
})

//DELETE method with params
app.delete("/notes/:id", (req, res) => {
   console.log(req.params);
   delete note[req.params.id];
   res.send("Note deleted successfully");

})

//PATCH method with params

app.patch("/notes/:id" , (req , res) => {
   note[req.params.id].description = req.body.description ;
   res.send("note updated successfully");
})
module.exports = app; //exporting the server to be used in other files
const express = require('express');
const app = express();

const note = [];

app.use(express.json());

app.post('/notes' , (req , res) => {
  note.push(req.body)
  console.log(req.body)
  res.status(201).json({
    message : "Note aded successfully",
  })
})


app.get('/notes' ,(req , res) =>{
  res.status(200).json({
    notes : note
  })
})


app.delete('/notes/:id' , (req , res) => {
  delete note[req.params.id] 
  res.status(204).json({
    "message" : "Note deleted Successfully"
  })
})


app.patch('/notes/:id' , (req , res) => {
  note[req.params.id].description = req.body.description 
  
  res.status(200).json({
    "message" : "Note updated Successfully"
  })
})


module.exports = app;
const express = require('express');
const newModel = require('./models/notes.model.js')

const app = express();

app.use(express.json());

app.post('/notes' , async (req , res) => {
const{title , description} = req.body ;

const note = await newModel.create({
  title , description 
})

res.status(201).json({
  message : "Note created successfully",
  note
})
})


app.get('/notes' , async (req , res) => {
const note = await newModel.find();
res.status(200).json({
  message : "this is your notes",
  note
})
})


app.delete('/notes/:index' , async (req , res) => {
const {index} = req.params;
const note = await newModel.findByIdAndDelete(index);
res.status(200).json({
  message : "Note deleted successfully",
  note

})
});


//Patch is learing 


// app.patch('/notes/:index' , async (req , res) => {
//   const {index} = req.params;
//   const {title , description} = req.body;
// })


module.exports = app;
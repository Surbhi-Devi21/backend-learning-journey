const newModel = require('./models/notes.model.js')
const core = require('cors');
const express = require('express');


const app = express();
app.use(core());
app.use(express.json());


/* POST/api/notes : create notes by user */

app.post('/api/notes' , async (req , res) => {
  const{title , description} = req.body
  const notes = await newModel.create({
    title , description
  })

  res.status(201).json({
    message : "Note is Created",
    notes
  })
})


/* GET/api/notes : get all notes by user */

app.get('/api/notes' , async (req , res) => {
  const notes = await newModel.find()
  res.status(200).json({
    message : "You fetch the notes",
    notes
  })
})


/* DELETE/api/notes : delete notes by its index*/

app.delete('/api/notes/:id' , async(req , res) =>{
  const {id} = req.params;
  const notes = await newModel.findByIdAndDelete(id);

  res.status(200).json({
    message : "note deleted",
    notes
  })
})


/*PUT/api/notes : update notes by its index*/

app.patch('/api/notes/:id' , async (req , res) => {
  const {id} = req.params;
  const {description} = req.body;
  const notes = await newModel.findByIdAndUpdate(id , {description});

  res.status(201).json({
    message : "note update",
    notes
  })
})



module.exports = app;
const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  title : String,
  description : String
});

const newModel = mongoose.model("notes" , notesSchema);

module.exports = newModel;
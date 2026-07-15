const express = require('express');
const app = express();
app.use(express.json());

const note =[];

app.post('/book' , (req , res) => {
  note.push(req.body);
  console.log(req.body);
  res.send("book added successfully") 
})

app.get("/book" , (req , res) =>{
  res.send(note);
})

app.listen(3000 , () => {
  console.log("Server is running on port 3000")
});
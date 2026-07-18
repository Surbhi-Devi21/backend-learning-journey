const app = require('./src/app');

const mongoose = require('mongoose');

function connectTodb() {
  mongoose.connect("mongodb://string") 
  .then(() => {
    console.log("connected to database");
  })
}
connectTodb();

app.listen(3000 , (req , res) => {
  console.log('server started at 3000')
})

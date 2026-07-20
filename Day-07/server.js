require('dotenv').config();

const app = require('./src/app');
const connectTodb = require('./src/config/database');

const mongoose = require('mongoose');


connectTodb();


app.listen(3000 , (req , res) =>{
  console.log('server started at 3000');
})
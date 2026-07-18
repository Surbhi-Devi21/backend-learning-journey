const app = require('./src/app');

const mongoose = require('mongoose');

function connectTodb() {
  mongoose.connect("mongodb://surbhimishra3135_db_user:vnjbyN2og5D5sR33@ac-hjvb1mc-shard-00-00.fddgl2c.mongodb.net:27017,ac-hjvb1mc-shard-00-01.fddgl2c.mongodb.net:27017,ac-hjvb1mc-shard-00-02.fddgl2c.mongodb.net:27017/?ssl=true&replicaSet=atlas-idqndv-shard-0&authSource=admin&appName=Cluster0/Day06") 
  .then(() => {
    console.log("connected to database");
  })
}
connectTodb();

app.listen(3000 , (req , res) => {
  console.log('server started at 3000')
})

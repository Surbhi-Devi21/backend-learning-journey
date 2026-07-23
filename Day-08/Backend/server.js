const app = require('./src/app.js')
const connectTodb = require('./src/config/database.js')

connectTodb();

app.listen(3000, (req , res) => {
  console.log("Server is running at 3000 port")
})
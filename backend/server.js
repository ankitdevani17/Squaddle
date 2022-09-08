
const app = require ("./app")
const connectDatabase = require("./config/database")
const dotenv = require("dotenv")
dotenv.config({path:"backend/config/config.env"})

app.listen(process.env.PORT, (req,res) => {
 connectDatabase()
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
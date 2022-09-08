const express = require("express")

const app = express();

app.use(express.json())

const user = require("./routes/userRoute")

app.use("/api/v1/register", user)
module.exports = app;
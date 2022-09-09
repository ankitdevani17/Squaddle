const express = require("express")

const app = express();

app.use(express.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
const user = require("./routes/userRoute");

app.use("/api/v1", user);
module.exports = app;
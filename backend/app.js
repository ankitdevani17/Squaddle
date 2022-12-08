const express = require("express")
const cors = require("cors")
const app = express();
const cookieParser = require("cookie-parser")
app.use(express.json());
app.use(cookieParser());
app.use(cors())
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(fileUpload());
const user = require("./routes/userRoute");

app.use("/api/v1", user);
app.post('/api/image', upload.single('image'), (req, res) => {
    console.log(req.files)
    if(!req.file){
        res.send({ code: 500, msg: 'err'})
    }
    else {
        res.send({code: 200, msg: 'upload success'})
    }
})
module.exports = app;
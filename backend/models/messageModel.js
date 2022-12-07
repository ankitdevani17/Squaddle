const mongoose = require("mongoose")
const validator = require("validator")

const messageSchema = new mongoose.Schema({
timestamp : {
        type: String,
        // default: new Date (), 
},

from_email : { type: String},
to_email :{ type: String},

message : {
    type: String,
    minLength: [1, "Message should be greater than 0 characters"],
  },

  });


  module.exports = mongoose.model("Message", messageSchema)
const mongoose = require("mongoose");

var staffSchema = new mongoose.Schema({
    staffphotoURL: String,
    description: String,
    content: String,
    name: String
},
 { timestamps: true}
);
 
module.exports = mongoose.model("Staff", staffSchema);
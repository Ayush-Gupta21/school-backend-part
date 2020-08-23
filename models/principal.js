const mongoose = require("mongoose");

var principalSchema = new mongoose.Schema({
    principalphotoURL: String,
    content: String
},
 { timestamps: true}
); 

module.exports = mongoose.model("Principal", principalSchema);
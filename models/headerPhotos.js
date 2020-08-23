const mongoose = require("mongoose");

var headerPhotoSchema = new mongoose.Schema({
    headerphotoURL: String
},
 { timestamps: true}
);
 
module.exports = mongoose.model("HeaderPhoto", headerPhotoSchema);
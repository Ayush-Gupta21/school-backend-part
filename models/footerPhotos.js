const mongoose = require("mongoose");

var footerPhotoSchema = new mongoose.Schema({
    footerphotoURL: String
},
 { timestamps: true}
);

module.exports = mongoose.model("FooterPhoto", footerPhotoSchema);
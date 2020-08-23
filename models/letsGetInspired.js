const mongoose = require("mongoose");

var letsGetInspiredSchema = new mongoose.Schema({
    quote: String,
    author: String
},
 { timestamps: true}
);

module.exports = mongoose.model("LetsGetInspired", letsGetInspiredSchema);
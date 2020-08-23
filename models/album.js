const mongoose = require("mongoose");

var albumSchema = new mongoose.Schema({
    name: String
},
 { timestamps: true}
);

module.exports = mongoose.model("Album", albumSchema);
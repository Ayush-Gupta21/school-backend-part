const mongoose = require("mongoose");

var academicSchema = new mongoose.Schema({
    content: String
},
 { timestamps: true}
);

module.exports = mongoose.model("Academic", academicSchema);
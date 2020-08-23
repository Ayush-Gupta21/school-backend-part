const mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
    email: String,
    phone: Number,
    address: String
},
 { timestamps: true}
);

module.exports = mongoose.model("Contact", contactSchema);
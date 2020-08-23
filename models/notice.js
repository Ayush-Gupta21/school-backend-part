const mongoose = require("mongoose");
var moment = require('moment');

var noticeSchema = new mongoose.Schema({
    date: {
        type: String, 
        default: () => moment().format("DD-MM-YYYY")
    } ,
    noticeHeading: String,
    noticeContent: String
},
 { timestamps: true}
);

module.exports = mongoose.model("Notice", noticeSchema);
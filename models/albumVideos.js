const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

var albumVideoSchema = new mongoose.Schema({
    videoURL: String,
    album: {
        type: ObjectId,
        ref: "Album",
        required: true
    }
}, 
 { timestamps: true}
);

module.exports = mongoose.model("AlbumVideo", albumVideoSchema);
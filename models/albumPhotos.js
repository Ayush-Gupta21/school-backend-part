const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

var albumPhotoSchema = new mongoose.Schema({
    photoURL: String,
    album: {
        type: ObjectId,
        ref: "Album",
        required: true
    }
},
 { timestamps: true}
);

module.exports = mongoose.model("AlbumPhoto", albumPhotoSchema);
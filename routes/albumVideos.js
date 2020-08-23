const express = require("express");
const router = express.Router();
const { getAlbumVideosById, createAlbumVideo, getAlbumVideo, getAllAlbumVideos, updateAlbumVideo, deleteAlbumVideo } = require("../controllers/albumVideos");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("albumVideoId", getAlbumVideosById);

//create
router.post("/albumvideo/create/:userId", isSignedIn, isAuthenticated, createAlbumVideo);

//read 
router.get("/albumvideo/:albumVideoId", getAlbumVideo);
router.get("/albumvideos", getAllAlbumVideos);

//update
router.put("/albumvideo/:albumVideoId/:userId", isSignedIn, isAuthenticated, updateAlbumVideo);

//delete
router.delete("/albumvideo/:albumVideoId/:userId", isSignedIn, isAuthenticated, deleteAlbumVideo);



module.exports = router;
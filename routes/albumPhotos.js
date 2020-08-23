const express = require("express");
const router = express.Router();
const { getAlbumPhotoById, createAlbumPhoto, getAlbumPhoto, getAllAlbumPhotos, updateAlbumPhoto, deleteAlbumPhoto } = require("../controllers/albumPhotos");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("albumPhotoId", getAlbumPhotoById);

//create
router.post("/albumphoto/create/:userId", isSignedIn, isAuthenticated, createAlbumPhoto);

//read 
router.get("/albumphoto/:albumPhotoId", getAlbumPhoto);
router.get("/albumphotos", getAllAlbumPhotos);

//update
router.put("/albumphoto/:albumPhotoId/:userId", isSignedIn, isAuthenticated, updateAlbumPhoto);

//delete
router.delete("/albumphoto/:albumPhotoId/:userId", isSignedIn, isAuthenticated, deleteAlbumPhoto);

module.exports = router;
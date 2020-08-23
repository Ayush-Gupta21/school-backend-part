const express = require("express");
const router = express.Router();
const {getAlbumById, createAlbum, getAlbum, getAllAlbums, updateAlbum, deleteAlbum} = require("../controllers/album");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("albumId", getAlbumById);

//create
router.post("/album/create/:userId", isSignedIn, isAuthenticated, createAlbum);

//read 
router.get("/album/:albumId", getAlbum);
router.get("/albums", getAllAlbums);

//update
router.put("/album/:albumId/:userId", isSignedIn, isAuthenticated, updateAlbum);

//delete
router.delete("/album/:albumId/:userId", isSignedIn, isAuthenticated, deleteAlbum);



module.exports = router;
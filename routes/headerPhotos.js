const express = require("express");
const router = express.Router();
const { getHeaderPhotoById, createHeaderPhoto, getHeaderPhoto, getAllHeaderPhotos, deleteHeaderPhoto } = require("../controllers/headerPhotos");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("headerphotoId", getHeaderPhotoById);

//create
router.post("/headerphoto/create/:userId", isSignedIn, isAuthenticated, createHeaderPhoto);

//read 
router.get("/headerphoto/:headerphotoId", getHeaderPhoto);
router.get("/headerphotos", getAllHeaderPhotos);

//delete
router.delete("/headerphoto/:headerphotoId/:userId", isSignedIn, isAuthenticated, deleteHeaderPhoto);

module.exports = router; 
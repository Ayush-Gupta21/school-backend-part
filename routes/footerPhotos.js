const express = require("express");
const router = express.Router();
const { getFooterPhotoById, createFooterPhoto, getFooterPhoto, getAllFooterPhotos, deleteFooterPhoto } = require("../controllers/footerPhotos");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("footerphotoId", getFooterPhotoById);

//create
router.post("/footerphoto/create/:userId", isSignedIn, isAuthenticated, createFooterPhoto);

//read 
router.get("/footerphoto/:footerphotoId", getFooterPhoto);
router.get("/footerphotos", getAllFooterPhotos);

//delete
router.delete("/footerphoto/:footerphotoId/:userId", isSignedIn, isAuthenticated, deleteFooterPhoto);

module.exports = router; 
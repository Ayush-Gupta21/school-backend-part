const express = require("express");
const router = express.Router();
const { getLetsGetInspired, getLetsGetInspiredById, createLetsGetInspired, getAllLetsGetInspired, updateLetsGetInspired, deleteLetsGetInspired } = require("../controllers/letsGetInspired");
const {isAuthenticated, isSignedIn, getUserById} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("letsGetInspiredId", getLetsGetInspiredById);

//create
router.post("/letsGetInspired/create/:userId", isSignedIn, isAuthenticated, createLetsGetInspired);

//read 
router.get("/letsGetInspired/:letsGetInspiredId", getLetsGetInspired);
router.get("/letsGetInspired", getAllLetsGetInspired);

//update
router.put("/letsGetInspired/:letsGetInspiredId/:userId", isSignedIn, isAuthenticated, updateLetsGetInspired);

//delete
router.delete("/letsGetInspired/:letsGetInspiredId/:userId", isSignedIn, isAuthenticated, deleteLetsGetInspired);



module.exports = router;
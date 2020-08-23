const express = require("express");
const router = express.Router();
const { getPrincipalById, createPrincipal, getPrincipal, updatePrincipal } = require("../controllers/principal");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("principalId", getPrincipalById);

//create
router.post("/principal/create/:userId", isSignedIn, isAuthenticated, createPrincipal);

//read 
router.get("/principal/:principalId", getPrincipal);

//update
router.put("/principal/:principalId/:userId", isSignedIn, isAuthenticated, updatePrincipal);

module.exports = router;
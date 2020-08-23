var express = require("express");
var router = express.Router();
const {isSignedIn, isAuthenticated, getUserById} = require("../controllers/auth");
const {getContactById, createContact, getContact, updateContact} = require("../controllers/contact");


router.param("contactId", getContactById)
router.param("userId", getUserById)

//create
router.post("/create/contact/:userId", isSignedIn, isAuthenticated, createContact) 

//read
router.get("/contact/:contactId", getContact)

//update
router.put("/contact/:contactId/:userId", isSignedIn, isAuthenticated, updateContact)

module.exports = router;
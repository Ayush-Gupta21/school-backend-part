const express = require("express");
const router = express.Router();
const { getAcademicById, createAcademic, getAcademic, updateAcademic } = require("../controllers/academic");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("academicId", getAcademicById);

//create
router.post("/academic/create/:userId", isSignedIn, isAuthenticated, createAcademic);

//read 
router.get("/academic/:academicId", getAcademic);

//update
router.put("/academic/:academicId/:userId", isSignedIn, isAuthenticated, updateAcademic);

module.exports = router;
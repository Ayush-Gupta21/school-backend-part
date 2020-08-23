const express = require("express");
const router = express.Router();
const { getAdmissionById, createAdmission, getAdmission, updateAdmission } = require("../controllers/admission");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("admissionId", getAdmissionById);

//create
router.post("/admission/create/:userId", isSignedIn, isAuthenticated, createAdmission);

//read 
router.get("/admission/:admissionId", getAdmission);

//update
router.put("/admission/:admissionId/:userId", isSignedIn, isAuthenticated, updateAdmission);

module.exports = router;
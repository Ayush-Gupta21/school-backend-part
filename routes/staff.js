const express = require("express");
const router = express.Router();
const { getStaff, getStaffById, createStaff, getAllStaffs, updateStaff, deleteStaff } = require("../controllers/staff");
const {getUserById, isAuthenticated, isSignedIn} = require("../controllers/auth");

//params
router.param("userId", getUserById);
router.param("staffId", getStaffById);

//create
router.post("/staff/create/:userId", isSignedIn, isAuthenticated, createStaff);

//read 
router.get("/staff/:staffId", getStaff);
router.get("/staffs", getAllStaffs);

//update
router.put("/staff/:staffId/:userId", isSignedIn, isAuthenticated, updateStaff);

//delete
router.delete("/staff/:staffId/:userId", isSignedIn, isAuthenticated, deleteStaff);

module.exports = router;
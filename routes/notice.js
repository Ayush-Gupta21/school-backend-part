const express = require("express")
const router = express.Router()
const { createNotice, getNotice, getAllNotices, updateNotice, getNoticeById, deleteNotice } = require("../controllers/notice");
const { isSignedIn, isAuthenticated, getUserById } = require("../controllers/auth");

//params
router.param("userId", getUserById)
router.param("noticeId", getNoticeById)

//create
router.post("/notice/create/:userId", isSignedIn, isAuthenticated, createNotice)

//read
router.get("/notices", getAllNotices)
router.get("/notice/:noticeId", getNotice)

//update
router.put("/notice/:noticeId/:userId", isSignedIn, isAuthenticated, updateNotice)

//delete
router.delete("/notice/:noticeId/:userId", isSignedIn, isAuthenticated, deleteNotice)

module.exports = router;
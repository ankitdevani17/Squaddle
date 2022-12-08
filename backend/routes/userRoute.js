const express = require("express");
const { registerUser, logout, loginUser, userDetails, userInfo, addMatch, getAllUsers,leftSwipe,addMessage, getMessage,getMatchedUser, getimage} = require("../controllers/userController");
const router =  express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").post(logout)
router.route("/register").put(userDetails)
router.route("/userinfo").get(userInfo)
router.route("/addmatch").put(addMatch)
router.route("/getallusers").get(getAllUsers)
router.route("/leftswipe").put(leftSwipe)
router.route("/message").post(addMessage)
router.route("/message").get(getMessage)
router.route("/matchedUser").get(getMatchedUser)
router.route("/image").put(getimage)
module.exports=router;
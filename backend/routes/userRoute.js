const express = require("express");
const { registerUser, logout, loginUser, userDetails, userInfo, addMatch, getAllUsers } = require("../controllers/userController");
const router =  express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").post(logout)
router.route("/register").put(userDetails)
router.route("/userinfo").get(userInfo)
router.route("/addmatch").get(addMatch)
router.route("/getallusers").get(getAllUsers)
module.exports=router;
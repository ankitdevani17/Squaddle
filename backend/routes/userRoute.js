const express = require("express");
const { registerUser, logout, loginUser, userDetails, userInfo } = require("../controllers/userController");
 
const router =  express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").post(logout)
router.route("/register").put(userDetails)
router.route("/userinfo").get(userInfo)
module.exports=router;
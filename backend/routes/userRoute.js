const express = require("express");
const { registerUser, logout, loginUser, userDetails } = require("../controllers/userController");
 
const router =  express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser)
router.route("/logout").post(logout)
router.route("/register").put(userDetails)
module.exports=router;
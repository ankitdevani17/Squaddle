const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")
exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{

    const {token} = req.cookies.get

    if(!token){
        return next(new ErrorHandler("Please Login to access this Page",401))
    }

const decodedData = jwt.verify(token,process.env.JWT_SECRET)

req.user = await User.findById(decodedData.id)
next();


})
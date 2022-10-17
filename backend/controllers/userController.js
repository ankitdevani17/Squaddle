const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwttoken");

//Register User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "sample user",
      url: "sample url",
    },
  });

  const token = user.getJWTToken();
  sendToken(user, 201, res);
});

//UserDetails put request 
exports.userDetails = catchAsyncErrors(async (req, res, next) => {
  const { email, token } = req.cookies;
  const user =  await User.findOne({ email })

  res.json({
    success: true,
    email,
  });

  // if(!email || !password){
  //   return next(new ErrorHander("Please Enter Email and Password",400))


  const update = req.body;
  const opts = { new: true };

  let doc = await User.findOneAndUpdate({ email }, update, opts);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHander("Please enter valid email or password"), 401);
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const token = user.getJWTToken();

  sendToken(user, 200, res);
});
// Logout

exports.logout = catchAsyncErrors(async (req, res, next) => {
  // res.cookie("token", null, {
  //   expires: new Date(Date.now()),
  //   httpOnly: true,
  // });
  res.clearCookie("token");
  res.clearCookie("email");

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  await user.save({ validateBeforeSave: false });
});


exports.userInfo =  catchAsyncErrors(async (req, res, next) => {

  const email = req.query.email
  const user = await User.findOne({email})
  res.send(user)
});


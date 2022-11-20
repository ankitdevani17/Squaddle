const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
    const email = user.email
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    // res.cookie("token", token, options);
    // res.cookie("email", email, options);
    
    res.status(statusCode).json({
      success: true,
      user,
      token,
      email
    });
  };
  
  module.exports = sendToken;
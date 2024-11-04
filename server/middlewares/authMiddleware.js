const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../models/User");

exports.protect = async (req, res, next) => {
  // Getting token and check if its exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({
      status: "fail",
      message: "You are not logged in, please log in",
    });
    return;
  }

  // verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check if user still exists
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    res.status(401).json({
      status: "fail",
      message: "The user belonging to this token does not longer exists",
    });
    return;
  }

  // check if user changed password after the token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    res.status(401).json({
      status: "fail",
      message: "User recently changed password, please log in again.",
    });
    return;
  }

  // Grant access to protected route
  req.user = freshUser;
  next();
};

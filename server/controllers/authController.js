const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("./../utils/email");
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// Registar um novo utilizador
exports.register = async (req, res) => {
  const { email, username, password, confirmPassword } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Utilizador já existe" });
    }

    user = await User.findOne({ username: username.toLowerCase() });
    if (user) {
      return res.status(400).json({ message: "Esse username já existe" });
    }

    user = new User({
      email,
      username: username.toLowerCase(),
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    await user.save();
    res.json({
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
};

// Login de um utilizador
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "30m", // 30m until jwt token expires
    });
    res.json({
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
};

exports.forgotPassword = async (req, res, next) => {
  // Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json({
      status: "fail",
      message: "No user found with that email",
    });
  }

  // generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const message = `
  <p>Forgot your password? No problem, here is the code for it:</p>
  <p style="font-size: 20px; font-weight: bold; margin: 10px 0;">${resetToken}</p>
  <p>Do verify your code and then, after the code has been verified, please enter your new password and a confirmation of it as well.</p>
`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password reset token (valid for 10 minutes)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    res.status(500).json({
      status: "fail",
      message: "There was an error sending email. Please try again later.",
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  // get user based on the
  let token_body = req.body.token || req.params.token;
  const hashedToken = crypto
    .createHash("sha256")
    .update(token_body)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // if token has not expired, and there is user, set the new password
  if (!user) {
    res.status(400).json({
      status: "fail",
      message: "Token is invalid or expired",
    });
    return;
  }
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // update changedPasswordAt property for the user
  // log the user in, send jwt
  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
  });
};

exports.verifyResetToken = async (req, res) => {
  try {
    const { token } = req.body;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Token inválido ou expirado" });
    }

    res.status(200).json({ message: "Token verificado com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor ao verificar o token" });
  }
};

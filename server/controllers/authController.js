const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
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
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro no servidor");
  }
};

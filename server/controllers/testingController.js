// Testing Purposes

exports.testing = function (req, res) {
  try {
    res.json({
      status: "success",
      message: "tested!",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
};

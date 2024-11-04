// Testing Purposes

const express = require("express");
const testingController = require("../controllers/testingController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware.protect, testingController.testing);

module.exports = router;

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Performance = require("../models/Performance");

router.post("/submitperformance", async (req, res) => {
  try {
    let {
      date,
      qualityOfWork,
      initiative,
      productivity,
      customerFocus,
      performanceRating,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());
    const performanceReport = new Performance(req.body);
    performanceReport.save();
    return res.json({ performanceReport, msg: "Performance review submited" });
  } catch (e) {
    return res.json({ e, msg: "Failed to send submit performance review" });
  }
});

module.exports = router;

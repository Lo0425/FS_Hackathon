const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Performance = require("../models/Performance");
const User = require("../models/User");

router.post("/submitperformance", async (req, res) => {
  try {
    let {
      date,
      qualityOfWork,
      initiative,
      productivity,
      customerFocus,
      performanceRating,
      employeeName,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());
    const performanceReport = new Performance(req.body);
    performanceReport.save();
    const user = await User.findOne({ username: employeeName });
    user.performanceReport = true;
    user.save();
    return res.json({
      performanceReport,
      msg: "Performance review submited",
    });
  } catch (e) {
    return res.json({ e, msg: "Failed to send submit performance review" });
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const employees = await Performance.find({ leaderId: req.params.id });
    let arr = employees.map((employee, i) => {
      return {
        name: employee.employeeId,
        data: [employee.performanceRating],
      };
    });
    return res.json(arr);
  } catch (e) {
    return res.json({
      e,
      msg: "Failed to get employee data",
    });
  }
});

module.exports = router;

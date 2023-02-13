const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Request = require("../models/Request");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/sendRequest", async (req, res) => {
  try {
    let { email, username, reason, leaveType, startDate, totalLeaveTaken } =
      req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const request = new Request(req.body); //{email:johndoe@gmail.com,username:"johndoe"}
    request.save();
    return res.json({ request, msg: "request sent" });
  } catch (e) {
    return res.json({ e, msg: "Failed to send request" });
  }
});

module.exports = router;

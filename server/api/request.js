const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Request = require("../models/Request");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findById } = require("../models/User");
const { findOne } = require("../models/Request");
require("dotenv").config();

router.post("/sendRequest", async (req, res) => {
  try {
    let {
      email,
      username,
      reason,
      tier1,
      tier2,
      leaveType,
      startDate,
      totalLeaveTaken,
      status,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const request = new Request(req.body); //{email:johndoe@gmail.com,username:"johndoe"}
    request.save();
    return res.json({ request, msg: "request sent" });
  } catch (e) {
    return res.json({ e, msg: "Failed to send request" });
  }
});
router.put("/acceptRequest/:id", async (req, res) => {
  try {
    let request = await Request.findOne({ _id: req.params.id });
    request.status = "Approved";
    let user = await User.findOne({ email: request.email });
    console.log(user);
    if (
      request.leaveType == "sickLeave" &&
      request.totalLeaveTaken <= user.sickleave
    ) {
      user.sickleave -= request.totalLeaveTaken;
    } else if (
      request.leaveType == "emergencyLeave" &&
      request.totalLeaveTaken <= user.emergencyleave
    ) {
      user.emergencyleave -= request.totalLeaveTaken;
    } else if (request.totalLeaveTaken <= user.annualleave) {
      user.annualleave -= request.totalLeaveTaken;
    } else {
      request.status = "Denied";
    }
    console.log(user.annualleave, user.emergencyleave, user.sickleave);
    user.save();
    request.save();
    return res.json({ request, msg: "request approved" });
  } catch (e) {
    return res.json({ e, msg: "Failed to send request" });
  }
});
router.put("/denyRequest/:id", async (req, res) => {
  try {
    let request = await Request.findOne({ _id: req.params.id });
    request.status = "Deny";
    request.save();
    return res.json({ request, msg: "request approved" });
  } catch (e) {
    return res.json({ e, msg: "Failed to send request" });
  }
});
router.get("/", async (req, res) => {
  try {
    let request = await Request.find({});
    return res.json({ request, msg: "request approved" });
  } catch (e) {
    return res.json({ e, msg: "Failed to send request" });
  }
});

module.exports = router;

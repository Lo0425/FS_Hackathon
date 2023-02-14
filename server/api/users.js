const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    // return res.json(username + email + password);

    let userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json({ msg: "Email already exists", status: 400 });

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    const user = new User(req.body); //{email:johndoe@gmail.com,username:"johndoe"}
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    user.password = hash;
    user.save();
    return res.json({ user, msg: "Registered successfully" });
  } catch (e) {
    return res.json({ e, msg: "Failed to register" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());

    let userFound = await User.findOne({
      email,
    });

    if (!userFound)
      return res.status(400).json({
        msg: "User doen't exist",
        status: 400,
      });

    let isMatch = bcrypt.compareSync(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ msg: "Wrong Password", status: 400 });

    jwt.sign(
      {
        data: userFound,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err)
          return res.status(400).json({
            err,
            status: 400,
          });
        return res.json({ token, msg: "Login Successfully" });
      }
    );
  } catch (e) {
    return res.json({
      e,
      msg: "Invalid Credential",
    });
  }
});

router.put("/updatedays/:id", async (req, res) => {
  try {
    const { daysofservice } = req.body;

    let user = await User.findOne({
      _id: req.params.id,
    });

    user.daysofservice = daysofservice;

    return res.json(user);
  } catch (e) {
    return res.json({
      e,
      msg: "Try again",
      status: 400,
    });
  }
});
router.put("/updateProfile/:id", async (req, res) => {
  try {
    console.log("hello");
    const { name, bankNo, bankName, incomeTax, socso, address, contactNo } =
      req.body;
    let user = await User.findOne({
      _id: req.params.id,
    });
    console.log(name);
    user.name = name;
    user.bankNo = bankNo;
    user.bankName = bankName;
    user.incomeTax = incomeTax;
    user.socso = socso;
    user.address = address;
    user.contactNo = contactNo;
    user.save();
    console.log(user);
    return res.json(user);
  } catch (e) {
    return res.json({
      e,
      msg: "Try again",
      status: 400,
    });
  }
});

router.put("/updateleave/:id", async (req, res) => {
  try {
    const { emergencyleave, sickleave, annualleave } = req.body;

    let user = await User.findOne({
      _id: req.params.id,
    });

    user.emergencyleave = emergencyleave;
    user.annualleave = annualleave;
    user.sickleave = sickleave;

    return res.json(user);
  } catch (e) {
    return res.json({
      e,
      msg: "Try again",
      status: 400,
    });
  }
});

router.get("/leader", async (req, res) => {
  try {
    const users = await User.find({ leader: true });
    return res.json(users);
  } catch (e) {
    return res.json({
      e,
      msg: "Failed to get user data",
    });
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const employees = await User.find({ leaderId: req.params.id });
    return res.json(employees);
  } catch (e) {
    return res.json({
      e,
      msg: "Failed to get employee data",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user)
      return res.json({
        msg: "No user found",
      });
    return res.json({
      user,
    });
  } catch (e) {
    return res.json({ e, msg: "Cannot get user" });
  }
});

module.exports = router;

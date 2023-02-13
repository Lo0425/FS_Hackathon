const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Request = require("../models/Request");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/sendRequest", async (req, res) => {
    try {
        let { username, email, reason, leaveType, startDate, totalLeaveTaken } =
            req.body;

        // {
        //     "email": "qweqweqwe@email.com",
        //     "username": "qweqweqwe",
        //     "reason": "qwe",
        //     "leaveType": "annual",
        //     "startDate": "02/02/23",
        //     "totalLeaveTaken": "1"
        // }

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors.array());

        const request = new Request(req.body);
        request.save();
        return res.json({ request, msg: "Request sent" });
    } catch (e) {
        return res.json({ e, msg: "Failed to send request" });
    }
});

module.exports = router;

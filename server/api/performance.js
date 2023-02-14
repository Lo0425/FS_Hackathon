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
        const user = await User.findOne({ username: employeeName });
        user.performanceRating.push(performanceRating);
        user.save();

        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json(errors.array());
        const performanceReport = new Performance(req.body);
        performanceReport.save();
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
        const employees = await User.find({ leaderId: req.params.id });
        let arr = employees.map((employee, i) => {
            return {
                name: employee.username,
                data: employee.performanceRating,
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

router.get("/:id", async (req, res) => {
    try {
        const employee = await User.findById(req.params.id);
        const performance = [];
        const performanceRating = await Performance.findOne({
            employeeName: employee.username,
        });
        performance.push(
            performanceRating.qualityOfWork,
            performanceRating.initiative,
            performanceRating.productivity,
            performanceRating.customerFocus
        );
        return res.json([
            {
                name: employee.username,
                data: performance,
            },
        ]);
    } catch (e) {
        return res.json({
            e,
            msg: "Failed to get employee data",
        });
    }
});

module.exports = router;

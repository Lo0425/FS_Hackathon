const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    reason: {
        type: String,
    },
    leaveType: {
        type: String,
    },
    startDate: {
        type: String,
    },
    totalLeaveTaken: {
        type: Number,
    },
});

module.exports = mongoose.model("request", RequestSchema);
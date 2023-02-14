const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    leader: {
        type: Boolean,
    },
    admin: {
        type: Boolean,
    },
    employee: {
        type: Boolean,
    },
    leaderId: {
        type: String,
    },
    onboardingDate: {
        type: String,
    },
    daysofservice: {
        type: Number,
    },
    sickleave: {
        type: Number,
        default: 14,
    },
    emergencyleave: {
        type: Number,
        default: 10,
    },
    annualleave: {
        type: Number,
        default: 12,
    },
    performanceRating: [
        {
            type: String,
        },
    ],
});

module.exports = mongoose.model("users", UserSchema);

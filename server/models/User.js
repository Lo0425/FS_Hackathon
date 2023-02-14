const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    default: "",
  },
  bankNo: {
    type: Number,
    default: 0,
  },
  bankName: {
    type: String,
    default: "",
  },
  incomeTax: {
    type: String,
    default: "",
  },
  socso: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  contactNo: {
    type: Number,
    default: 0,
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
  performanceReport: {
    type: Boolean,
    default: false,
  },
  performanceRating: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("users", UserSchema);

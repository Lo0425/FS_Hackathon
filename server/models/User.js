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
});

module.exports = mongoose.model("users", UserSchema);

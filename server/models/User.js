const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("user", UserSchema);

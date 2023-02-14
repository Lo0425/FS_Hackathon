const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema({
  employeeId: {
    type: String,
  },
  date: {
    type: String,
  },
  qualityOfWork: {
    type: Number,
  },
  initiative: {
    type: Number,
  },
  productivity: {
    type: Number,
  },
  customerFocus: {
    type: Number,
  },

  performaceRating: {
    type: Number,
  },
});

module.exports = mongoose.model("performance", PerformanceSchema);

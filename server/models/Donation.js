const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Donation = mongoose.model("donation", donationSchema);

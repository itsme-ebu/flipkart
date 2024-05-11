const mongoose = require("mongoose");

// Define schema for address
const userSchema = new mongoose.Schema({
  customer_address: {
    type: String,
    required: true,
  },
  customer_state: {
    type: String,
    required: true,
  },
  customer_pincode: {
    type: String,
    required: true,
  },

  customer_name: {
    type: String,
    required: true,
  },
  customer_number: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
});

// Create User model
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;

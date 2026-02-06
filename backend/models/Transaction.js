const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ["income", "expense"], required: true },
  amount: Number,
  category: String,
  division: { type: String, enum: ["office", "personal"] },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);

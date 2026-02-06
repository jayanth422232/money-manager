const express = require("express");
const router = express.Router();
const Account = require("../models/Account");

router.get("/", async (req, res) => {
  res.json(await Account.find());
});

router.post("/transfer", async (req, res) => {
  const { fromId, toId, amount } = req.body;

  await Account.findByIdAndUpdate(fromId, { $inc: { balance: -amount } });
  await Account.findByIdAndUpdate(toId, { $inc: { balance: amount } });

  res.json({ msg: "Transfer done" });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// ADD
router.post("/", async (req, res) => {
  const data = await Transaction.create(req.body);
  res.json(data);
});

// GET (FILTERS)
router.get("/", async (req, res) => {
  const { type, category, division, from, to } = req.query;
  let filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;
  if (division) filter.division = division;
  if (from && to)
    filter.createdAt = { $gte: new Date(from), $lte: new Date(to) };

  const data = await Transaction.find(filter).sort({ createdAt: -1 });
  res.json(data);
});

// EDIT (12 HOURS)
router.put("/:id", async (req, res) => {
  const t = await Transaction.findById(req.params.id);
  const diff = (Date.now() - t.createdAt) / (1000 * 60 * 60);

  if (diff > 12)
    return res.status(403).json({ msg: "Edit restricted" });

  const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  res.json(updated);
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const transactionRoutes = require("./routes/transactionRoutes");
const accountRoutes = require("./routes/accountRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/api/transactions", transactionRoutes);
app.use("/api/accounts", accountRoutes);

app.listen(process.env.PORT, () =>
  console.log("Server running on port", process.env.PORT)
);

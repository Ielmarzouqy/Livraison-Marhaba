const express = require("express");
const authRoutes = express.Router();

authRoutes.post("/login", (req, res) => {
  res.json({ message: "Login" });
});

authRoutes.post("/register", (req, res) => {
  res.json({ message: "Register" });
});

module.exports = authRoutes;

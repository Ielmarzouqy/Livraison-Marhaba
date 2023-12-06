const express = require("express");
const authRoutes = require("./auth/authRoutes");
const orderRoutes = require("./order/orderRoutes");
const menuRoutes = require("./menu/menuRoutes");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/auth", authRoutes);
router.use("/order", orderRoutes);
router.use("/menu", menuRoutes)

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports = router;

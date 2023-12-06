const express = require("express");
const authRoutes = require("./auth/authRoutes");
const deliveryRoutes = require("./delivery/deliveryRoutes");
const menuRoutes = require("./menu/menuRoutes");
const restoRoutes = require("./Restaurant/restoRoutes");
const orderRoutes = require("./order/orderRoutes");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use("/auth", authRoutes);
router.use("/delivery", deliveryRoutes);
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);

router.use("/resto", restoRoutes);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports = router;

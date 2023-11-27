const express = require("express");
const deliveryRoutes = express.Router();

deliveryRoutes.post("/updateLocation");

module.exports = deliveryRoutes;

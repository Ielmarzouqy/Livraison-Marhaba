const express = require("express");
const deliveryRoutes = express.Router();
const DeliveryTrackingController = require("../../../../adapters/controllers/deliveryTracking/DeliveryTrackingController");
const deliveryTrackingController = new DeliveryTrackingController();

deliveryRoutes.post(
  "/updateLocation",
  deliveryTrackingController.updateLocation
);

module.exports = deliveryRoutes;

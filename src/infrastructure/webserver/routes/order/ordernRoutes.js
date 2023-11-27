const express = require("express");
const ordernRoutes = express.Router();
const OrdernController = require("../../../../adapters/controllers/order/OrdernController");
const ordernController = new OrdernController();

ordernRoutes.post("/ordern", ordernController.registerOrder);
ordernRoutes.put("/confirm", ordernController.confirmationOrder);


module.exports = ordernRoutes;

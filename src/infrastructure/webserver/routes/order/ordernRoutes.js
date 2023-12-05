const express = require("express");
const ordernRoutes = express.Router();
const OrdernController = require("../../../../adapters/controllers/order/OrdernController");
const ordernController = new OrdernController();

ordernRoutes.post("/ordern", ordernController.registerOrder);
ordernRoutes.get("/orderPending", ordernController.getPendingOrder);

ordernRoutes.put("/confirm/:_id", ordernController.confirmationOrder);


module.exports = ordernRoutes;

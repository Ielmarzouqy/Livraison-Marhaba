const express = require("express");
const orderRoutes = express.Router();
const OrderController = require("../../../../adapters/controllers/order/OrderController");
const orderController = new OrderController();

orderRoutes.post("/ordern", orderController.registerOrder);
orderRoutes.get("/orderPending", orderController.getPendingOrder);

orderRoutes.put("/confirm/:_id", orderController.confirmationOrder);


module.exports = orderRoutes;

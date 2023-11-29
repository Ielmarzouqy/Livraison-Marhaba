const express = require("express");
const restoRoutes = express.Router();
const RestoController = require("../../../../adapters/controllers/restaurant/RestoController");
const restoController = new RestoController();


restoRoutes.get("/", restoController.getAllRestos);


module.exports = restoRoutes;
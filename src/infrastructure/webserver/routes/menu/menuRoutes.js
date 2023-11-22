const express = require("express");
const menuRoutes = express.Router();
const MenuController = require("../../../../adapters/controllers/menu/MenuController");
const menuController = new MenuController();


menuRoutes.post("/", menuController.createMenu);
menuRoutes.get("/:menuId", menuController.getMenuById);
menuRoutes.put("/:menuId", menuController.updateMenu);
menuRoutes.delete("/:menuId", menuController.deleteMenu);
menuRoutes.get("/", menuController.getAllMenus);


module.exports = menuRoutes;
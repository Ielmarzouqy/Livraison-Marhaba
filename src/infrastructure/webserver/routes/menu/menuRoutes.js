const express = require("express");
const menuRoutes = express.Router();
const MenuController = require("../../../../adapters/controllers/menu/MenuController");
const menuController = new MenuController();
const upload = require("./../../../helpers/imageHandeling");


menuRoutes.post("/", upload.single("image"), menuController.createMenu);
menuRoutes.post("/", menuController.createMenu);
menuRoutes.get("/:menuId", menuController.getMenuById);
menuRoutes.put("/:menuId", upload.single("image"), menuController.updateMenu);
menuRoutes.delete("/:menuId", menuController.deleteMenu);
menuRoutes.get("/", menuController.getAllMenus);
menuRoutes.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    return res.json({ message: "File uploaded successfully" });
  });
  


module.exports = menuRoutes;
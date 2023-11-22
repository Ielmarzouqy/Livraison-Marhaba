const MenuServicesInterface = require("../../../application/interfaces/services/menu/MenuServicesInterface");
const MenuRepository = require("../../../infrastructure/repositories/MenuRepository");

class MenuServices extends MenuServicesInterface {
  constructor() {
    super();
    this.menuRepository = new MenuRepository();
  }

  createMenu = async (data) => {
    const menu = await this.menuRepository.create(data);

    if (!menu) {
      const error = new Error("Menu could not be created");
      error.status = 500;

      throw error;
    }

    return menu;
  };

  getMenuById = async (menuId) => {
    const menu = await this.menuRepository.findById(menuId);

    if (!menu) {
      const error = new Error("Menu not found");
      error.status = 404;

      throw error;
    }

    return menu;
  };

  updateMenu = async (menuId, data) => {
    const menu = await this.menuRepository.findById(menuId);

    if (!menu) {
      const error = new Error("Menu not found");
      error.status = 404;

      throw error;
    }

    const updatedMenu = await this.menuRepository.update(menuId, data);

    return updatedMenu;
  };

  deleteMenu = async (menuId) => {
    const menu = await this.menuRepository.findById(menuId);

    if (!menu) {
      const error = new Error("Menu not found");
      error.status = 404;

      throw error;
    }

    await this.menuRepository.delete(menuId);
  };

  getAllMenus = async () => {
    const menus = await this.menuRepository.findAll();

    return menus;
  };

}

module.exports = MenuServices;
const MenuServices = require("../../../adapters/services/menu/MenuServices");

class GetAllMenusUseCase {
  constructor() {
    this.menuServices = new MenuServices();
  }

  execute = async () => {
    try {
      const menus = await this.menuServices.getAllMenus();

      return {
        status: 200,
        message: "Menus retrieved successfully",
        menus: menus,
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
      };
    }
  };
}

module.exports = GetAllMenusUseCase;
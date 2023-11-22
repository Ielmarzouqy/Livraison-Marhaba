const MenuServices = require("../../../adapters/services/menu/MenuServices");

class GetMenuByIdUseCase {
  constructor() {
    this.menuServices = new MenuServices();
  }

  execute = async (menuId) => {
    try {
      const menu = await this.menuServices.getMenuById(menuId);

      return {
        status: 200,
        message: "Menu retrieved successfully",
        menu: menu,
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

module.exports = GetMenuByIdUseCase;
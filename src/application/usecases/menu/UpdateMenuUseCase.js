const MenuServices = require("../../../adapters/services/menu/MenuServices");

class UpdateMenuUseCase {
  constructor() {
    this.menuServices = new MenuServices();
  }

  execute = async (menuId, data) => {
    try {
      await this.menuServices.validateUpdateMenu(data);
      const updatedMenu = await this.menuServices.updateMenu(menuId, data);

      return {
        status: 200,
        message: "Menu updated successfully",
        menu: updatedMenu,
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

module.exports = UpdateMenuUseCase;
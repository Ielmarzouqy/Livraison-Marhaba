const MenuServices = require("../../../adapters/services/menu/MenuServices");

class DeleteMenuUseCase {
  constructor() {
    this.menuServices = new MenuServices();
  }

  execute = async (menuId) => {
    try {
      await this.menuServices.deleteMenu(menuId);

      return {
        status: 200,
        message: "Menu deleted successfully",
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

module.exports = DeleteMenuUseCase;
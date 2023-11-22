const MenuServices = require("../../../adapters/services/menu/MenuServices"); 

class CreateMenuUseCase {
    constructor() {
      this.menuServices = new MenuServices();
    }
  
    execute = async (data) => {
      try {
        await this.menuServices.validateCreateMenu(data);

        const createdMenu = await this.menuServices.createMenu(data);
  
        return {
          status: 200,
          message: "Menu created successfully",
          menu: createdMenu,
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
  
  module.exports = CreateMenuUseCase;
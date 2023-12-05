const RestoServices = require("../../../adapters/services/restaurant/RestoServices");

class GetAllMenusUseCase {
  constructor() {
    this.restoServices = new RestoServices();
  }

  execute = async () => {
    try {
      const restaurants = await this.restoServices.getAllRestos();

      return {
        status: 200,
        message: "Restaurants retrieved successfully",
        restaurants: restaurants,
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
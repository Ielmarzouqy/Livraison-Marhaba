const RestoRepository = require("../../../infrastructure/repositories/RestoRepository");

class RestoServices {
  constructor() {
    this.restoRepository = new RestoRepository();
  }
  
  getAllRestos = async () => {
    const restaurants = await this.restoRepository.findAll();

    return restaurants;
  };


}

module.exports = RestoServices;
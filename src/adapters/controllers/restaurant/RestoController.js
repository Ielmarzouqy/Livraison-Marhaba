const GetAllRestosUseCase = require("../../../application/usecases/restaurant/GetAllRestosUseCase");

class RestoController {
  constructor() {
    this.getAllRestosUseCase = new GetAllRestosUseCase();
  }


  getAllRestos = async (req, res) => {
    const { status, message , restaurants } = await this.getAllRestosUseCase.execute();
    res.status(status).json({ message, restaurants });
  };
}

module.exports = RestoController;
const UpdateLocationUseCase = require("../../../application/usecases/deliveryTracking/UpdateLocationUseCase");

class DeliveryTrackingController {
  constructor() {
    this.UpdateLocationUseCase = new UpdateLocationUseCase();
  }

  updateLocation = async (req, res, next) => {
    try {
      const { deliveryId, location } = req.body;
      const { status, ...rest } = await this.UpdateLocationUseCase.execute(
        deliveryId,
        location
      );

      res.status(status).json(rest);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = DeliveryTrackingController;

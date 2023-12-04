const UpdateLocationUseCase = require("../../../application/usecases/deliveryTracking/UpdateLocationUseCase");

class DeliveryTrackingController {
  constructor() {
    this.UpdateLocationUseCase = new UpdateLocationUseCase();
  }

  updateLocation = async (socket, data) => {
    try {
      const { deliveryId, location } = data;
      const { status, ...rest } = await this.UpdateLocationUseCase.execute(
        deliveryId,
        location
      );

      socket.emit("deliveryLocation", { status, ...rest });
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = DeliveryTrackingController;

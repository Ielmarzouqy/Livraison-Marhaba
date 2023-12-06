const UpdateLocationUseCase = require("../../../application/usecases/deliveryTracking/UpdateLocationUseCase");

class DeliveryTrackingController {
  constructor() {
    this.UpdateLocationUseCase = new UpdateLocationUseCase();
  }

  updateLocation = async (socket, data) => {
    try {
      const { deliveryId, location } = data;
      const res = await this.UpdateLocationUseCase.execute(
        deliveryId,
        location
      );

      if (res.status === 200) {
        socket.emit("deliveryLocation", res.data);
      } else {
        socket.emit("deliveryLocation", { error: res.message });
      }
    } catch (err) {
      console.log(err);
    }
  };

  getLocation = async (socket, data) => {
    try {
      const { deliveryId } = data;
      const res = await this.UpdateLocationUseCase.getLocation(deliveryId);

      if (res.status === 200) {
        socket.emit("deliveryLocation", res.data);
      } else {
        socket.emit("deliveryLocation", { error: res.message });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = DeliveryTrackingController;

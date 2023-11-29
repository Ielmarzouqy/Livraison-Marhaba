const DeliveryTrackingServices = require("../../../adapters/services/deliveryTracking/DeliveryTrackingServices");

class UpdateLocationUseCase {
  constructor() {
    this.deliveryTrackingServices = new DeliveryTrackingServices();
  }

  execute = async (deliveryId, location) => {
    try {
      await this.deliveryTrackingServices.updateLocation(deliveryId, location);
      return {
        status: 200,
        message: `Location of delivery ${deliveryId} updated`,
        data: {
          deliveryId,
          location,
        },
      };
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    }
  };
}

module.exports = UpdateLocationUseCase;

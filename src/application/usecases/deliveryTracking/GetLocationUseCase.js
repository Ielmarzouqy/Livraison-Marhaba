const DeliveryTrackingServices = require("../../../adapters/services/deliveryTracking/DeliveryTrackingServices");

class GetLocationUseCase {
  constructor() {
    this.deliveryTrackingServices = new DeliveryTrackingServices();
  }

  async execute(deliveryId) {
    try {
      const deliveryTracking = await this.deliveryTrackingServices.getLocation(
        deliveryId
      );
      return {
        status: 200,
        data: deliveryTracking,
      };
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    }
  }
}

module.exports = GetLocationUseCase;

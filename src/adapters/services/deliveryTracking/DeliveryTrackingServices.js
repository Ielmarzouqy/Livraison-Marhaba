const FirebaseRepository = require("../../../infrastructure/repositories/FirebaseRepository");

class DeliveryTrackingServices {
  constructor() {
    this.firebaseRepository = new FirebaseRepository();
  }

  updateLocation = async (deliveryId, location) => {
    await this.firebaseRepository.setData(
      `deliveries/${deliveryId}/location`,
      location
    );
  };

  getLocation = async (deliveryId) => {
    const location = await this.firebaseRepository.getData(
      `deliveries/${deliveryId}/location`
    );
    return location;
  };
}

module.exports = DeliveryTrackingServices;

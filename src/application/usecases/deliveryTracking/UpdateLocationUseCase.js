class UpdateLocationUseCase {
  execute(deliveryId, location) {
    return {
      status: 200,
      message: `Location of delivery ${deliveryId} updated`,
      data: {
        deliveryId,
        location,
      },
    };
  }
}

module.exports = UpdateLocationUseCase;

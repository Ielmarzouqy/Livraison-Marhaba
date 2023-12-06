const OrderRepository = require("../../../infrastructure/repositories/OrderRepository");

class OrderServices {
  constructor() {
    this.orderRepository = new OrderRepository();
  }

  makeOrder = async (data) => {
    console.log('makeOrder ', data);

    const ordern = await this.orderRepository.create(data);

    console.log('makeOrder in order service', ordern);

    if (!ordern) {
      const error = new Error('Order could not be created');
      error.status = 500;

      throw error;
    }

    return {
      // id: ordern._id,
      food: ordern.foodnNames,
      user: ordern.usern,
      price: ordern.price,
    };
  };

  confirmOrdern = async (orderId, orderUpdate) => {
    try {
      const updatedOrder = await this.orderRepository.update(
        orderId,
        orderUpdate
      );

      console.log('orderUpdate service ', updatedOrder);

      return updatedOrder;
    } catch (error) {
      throw new Error(error);
    }
  };

  pendingOrder = async () => {
    try {
      const pendingOrders = await this.orderRepository.getOrders();

      console.log('orderUpdate service ', pendingOrders);

      return pendingOrders;
    } catch (error) {
      throw new Error(error);
    }
  };

}

module.exports = OrderServices;

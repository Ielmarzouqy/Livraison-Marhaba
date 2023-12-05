const OrdernRepository = require('../../../infrastructure/repositories/OrdernRepository');

class OrdernServices {
  constructor() {
    this.ordernRepository = new OrdernRepository();
  }

  makeOrder = async (data) => {
    console.log('makeOrder ', data);

    const ordern = await this.ordernRepository.create(data);

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
      const updatedOrder = await this.ordernRepository.update(
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
      const pendingOrders = await this.ordernRepository.getOrders();

      console.log('orderUpdate service ', pendingOrders);

      return pendingOrders;
    } catch (error) {
      throw new Error(error);
    }
  };

  // getOrdernCredentials = async (id) => {
  //   const ordern = await this.ordernRepository.findById(id);

  //   if (!ordern) {
  //     const error = new Error("Order does not exist");
  //     error.status = 404;

  //     throw error;
  //   }

  //   return {
  //     id: ordern._id,
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //   //   roles: user.roles.map((role) => role.name),

  //     foodns: ordern.foodns.map((foodn) => foodn.name),
  //     users: ordern.users.map((user) => user.name),

  //   };
  // };
}

module.exports = OrdernServices;

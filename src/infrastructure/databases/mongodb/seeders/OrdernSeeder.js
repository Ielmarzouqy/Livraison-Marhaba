const { exist } = require('joi');
const OrderRepository = require('../../../repositories/OrderRepository');
class OrdernSeeder {
  constructor() {
    this.orderRepository = new OrderRepository();
  }

  seed = async () => {
    try {
      const order = {
        foodnNames: 'Food1',
        usern: '6557768d995059a009a10ae3',

        price: '233',
      };
      
      await this.orderRepository.create(order);
      console.log('order seeded successfully.');
    
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = OrdernSeeder;

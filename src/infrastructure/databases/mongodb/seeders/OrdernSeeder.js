const { exist } = require('joi');
const OrdernRepository = require('../../../repositories/OrdernRepository');
class OrdernSeeder {
  constructor() {
    this.ordernRepository = new OrdernRepository();
  }

  seed = async () => {
    try {
      const order = {
        foodnNames: 'Food1',
        usern: '6557768d995059a009a10ae3',

        price: '233',
      };
      
      await this.ordernRepository.create(order);
      console.log('order seeded successfully.');
    
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = OrdernSeeder;

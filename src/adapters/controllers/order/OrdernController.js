const OrdernUseCase = require('../../../application/usecases/order/OrdernUseCase');

class OrdernController {
  constructor() {
    this.ordernUseCase = new OrdernUseCase();
  }

  registerOrder = async (req, res) => {
    const { foods, user } = req.body;

    try {
      const result = await this.ordernUseCase.executeOrder({
        foods,
        user,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  confirmationOrder = async (req, res) => {
    const { _id } = req.params;

    console.log(_id);
    try {
      const result = await this.ordernUseCase.confirmOrder(_id);

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getPendingOrder = async (req, res) => {
  
    try {
      const result = await this.ordernUseCase.displayOrder();

      if (!result || !Array.isArray(result.pendingOrders)) {
        return res.status(500).json({
          error: 'Internal Server Error',
          message: 'Invalid result format',
        });
      }

      const formattedResult = result.pendingOrders.map((order) => ({
        _id: order._id,
        food: order.food.map((food) => ({
          _id: food._id,
          name: food.name,
         
        })),
        
      }));
      console.log('result', result);
      console.log('formattedResult', formattedResult[0].food);

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: 'Internal Server Error', message: error.message });
    }
  };
}

module.exports = OrdernController;

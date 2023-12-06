const OrderUseCase = require("../../../application/usecases/order/OrderUseCase");

class OrderController {
  constructor() {
    this.orderUseCase = new OrderUseCase();
  }

  registerOrder = async (req, res) => {
    const { foods, user } = req.body;

    try {
      const result = await this.orderUseCase.executeOrder({
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
      const result = await this.orderUseCase.confirmOrder(_id);

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getPendingOrder = async (req, res) => {
    // const {_id } = req.params;

    // console.log(_id)
    try {
      const result = await this.orderUseCase.displayOrder();

      if (!result || !Array.isArray(result.pendingOrders)) {
        // If result or pendingOrders is missing or not an array, handle it accordingly
        return res.status(500).json({
          error: 'Internal Server Error',
          message: 'Invalid result format',
        });
      }

      const formattedResult = result.pendingOrders.map((order) => ({
        _id: order._id,
        //     price: order.price,
        //     user: order.user,
        food: order.food.map((food) => ({
          _id: food._id,
          name: food.name,
          //       description: food.description,
          //       price: food.price,
          //       // Include other relevant fields from the food object
        })),
        //     status: order.status,
        //     createdAt: order.createdAt,
        //     updatedAt: order.updatedAt,
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

module.exports = OrderController;

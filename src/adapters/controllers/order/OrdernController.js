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
    const { _id } = req.body;

    try {
      const result = await this.ordernUseCase.confirmOrder({
        _id,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

module.exports = OrdernController;

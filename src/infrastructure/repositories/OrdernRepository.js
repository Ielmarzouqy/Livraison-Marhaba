const BaseRepository = require('./BaseRepository');
const User = require('../databases/mongodb/models/User');
const Foodn = require('../databases/mongodb/models/Foodn');
const Ordern = require('../databases/mongodb/models/Ordern');

class OrdernRepository extends BaseRepository {
  constructor() {
    super(Ordern);
    this.foodnModel = Foodn;
    this.usernModel = User;
  }

  create = async (data) => {
    const { foods, user } = data;

    console.log('repo  ', data);
    try {
      const foodns = await this.foodnModel.find({ _id: { $in: foods } });
      const userns = await this.usernModel.findById(user);

      const orders = foodns.map((foodn) => ({
        food: foodn,
        price: foodn.price,
        user: userns,
      }));

      return await this.model.insertMany(orders);
    } catch (error) {
      throw new Error(error);
    }
  };
}

update = async (orderId, orderUpdate) => {
  try {
    const updatedOrder = await this.model.findByIdAndUpdate(
      orderId,
      { $set: orderUpdate },
      { new: true }
    );
    console.log('orderUpdate repo ', orderUpdate) /
      console.log('orderUpdate ', updatedOrder);

    return updatedOrder;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = OrdernRepository;

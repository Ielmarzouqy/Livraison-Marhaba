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
    const { food, user, ...ordernCredentials } = data;

    console.log("repo  ", data)
    try {

      // console.log('fffffff  ', food);
      // console.log('uuuuuuu  ', user);
      const foodns = await this.foodnModel.find({ _id: food });
      const userns = await this.usernModel.findById(user);
       

      return await this.model.create({
        food: foodns[0]._id,
        user: userns._id,
        ...ordernCredentials,
      });
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
      console.log("orderUpdate repo ", orderUpdate)
    /
    console.log("orderUpdate ", updatedOrder)

    return updatedOrder;
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = OrdernRepository;

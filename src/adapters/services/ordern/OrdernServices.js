
const OrdernRepository = require("../../../infrastructure/repositories/OrdernRepository");
const validateData = require("../../../infrastructure/helpers/validateData");

class OrdernServices {
  constructor() {
    super();
    this.ordernRepository = new OrdernRepository();
    this.validateData = validateData;
  }

  validateOrdernData = async (ordernData) => {
    const { error: validationError } = this.validateData(
      ordernData,
      "makeorder"
    );

    if (validationError) {
      const error = new Error(validationError.message);
      error.status = validationError.status;

      throw error;
    }
  };
 
//   register = async (data) => {
//     const user = await this.userRepository.create(data);

//     if (!user) {
//       const error = new Error("User could not be created");
//       error.status = 500;

//       throw error;
//     }

//     return {
//       id: user._id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       image: user.image,
//       phoneNumber: user.phoneNumber,
//       address: user.address,
//       roles: user.roles.map((role) => role.name),
//       isVerified: user.isVerified,
//       isBanned: user.isBanned,
//     };
//   };



  getOrdernCredentials = async (id) => {
    const ordern = await this.ordernRepository.findById(id);

    if (!ordern) {
      const error = new Error("User does not exist");
      error.status = 404;

      throw error;
    }

    return {
      id: ordern._id,
      firstName: user.firstName,
      lastName: user.lastName,
    //   email: user.email,
    //   image: user.image,
    //   phoneNumber: user.phoneNumber,
    //   address: user.address,
    //   roles: user.roles.map((role) => role.name),

      foodns: ordern.foodns.map((foodn) => foodn.name),
      users: ordern.users.map((user) => user.name),

      
    //   isVerified: user.isVerified,
    //   isBanned: user.isBanned,
    };
  };
}

module.exports = OrdernServices;

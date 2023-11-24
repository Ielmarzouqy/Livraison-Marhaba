const OrdernServices = require("../../../adapters/services/ordern/OrdernServices");

class OrdernUseCase   {
  constructor() {
    
    this.ordernServices = new OrdernServices();
  }

  executeOrder = async (data) => {
    try {
   
        console.log("usecase of order after validateOrdernData  ", data)

      const ordern = await this.ordernServices.makeOrder(data);

        console.log("usecase of order after makeOrder  ", data)


    
      return {
        status: 200,
        message: "Order made  successfully ",
        ordern,
        
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
      };
    }
  };
}

module.exports = OrdernUseCase;

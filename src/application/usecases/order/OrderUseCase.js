const OrderServices = require("../../../adapters/services/order/OrderServices");

class OrderUseCase   {
  constructor() {
    
    this.orderServices = new OrderServices();
  }

  executeOrder = async (data) => {
    try {
   
        console.log("usecase of order after validateOrdernData  ", data)

      const ordern = await this.orderServices.makeOrder(data);

        console.log("usecase of order after makeOrder  ", data)

       
    
      return {
        status: 200,
        message: "Order made use case successfully ",
        ordern: data,
        
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
      };
    }
  };

  confirmOrder = async (_id)=>{

    const orderUpdate = {
      status: 'pickup', 
    };

    try {
    
         const confirmedOrder  =  await this.orderServices.confirmOrdern(_id, orderUpdate);
  
    return {
      status: 200,
      message: "Order made and confirmed successfully",
      confirmedOrder: confirmedOrder,
    };
  } catch (error) {
    console.log(error);
    return {
      status: error.status || 500,
      message: error.message || "Something went wrong, please try again",
    };
  }
  }

  displayOrder = async ()=>{

    // const orderUpdate = {
    //   status: 'pickup', 
    // };

    try {
    
         const pendingOrders  =  await this.orderServices.pendingOrder();
  
    return {
      status: 200,
      message: "Order made and confirmed successfully",
      pendingOrders: pendingOrders,
    };
  } catch (error) {
    console.log(error);
    return {
      status: error.status || 500,
      message: error.message || "Something went wrong, please try again",
    };
  }
  }

}


module.exports = OrderUseCase;
 
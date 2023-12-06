const { Schema, model, models } = require("../mongoose");

const orderSchema = Schema({
    price:{
        type:Number,
      
        
    },
    user:{
        ref: "User",
        type : Schema.Types.ObjectId,

    },
    food:{
         ref: "Menu",
        type : [Schema.Types.ObjectId],
   
    },  
    status:{
        type : String,
        default:"pending"
    },
   
    },
    {
        timestamps:true,
    
});

const Order = models.Order || model("Order", orderSchema);

module.exports = Order;
const { Schema, model, models } = require("../mongoose");

const ordernSchema = Schema({
    price:{
        type:Number,
        // required:true,
        
    },
    user:{
        // type: [Object],
        ref: "User",
        type : Schema.Types.ObjectId,
        // // required:true,
        // ref: 'User',
    },
    food:{
        // type: [Object],
         ref: "Foodn",
        type : Schema.Types.ObjectId,
        // // required:true,
        // ref: 'Foodn',
    },  
    status:{
        type : String,
        default:"pending"
        
    },
    
    },
    {
        timestamps:true,
    
});

const Ordern = models.Ordern || model("Ordern", ordernSchema);

module.exports = Ordern;
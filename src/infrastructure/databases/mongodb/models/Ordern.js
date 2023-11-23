const { Schema, model, models } = require("../mongoose");

const ordernSchema = Schema({
    price:{
        type:Number,
        required:true,
        
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        // required:true,
        ref: 'User',
    },
    food:{
        type : mongoose.Schema.Types.ObjectId,
        // required:true,
        ref: 'Foodn',
    },  

    
    },
    {
        timestamps:true,
    
});

const Ordern = models.Ordern || model("Ordern", ordernSchema);

module.exports = Ordern;
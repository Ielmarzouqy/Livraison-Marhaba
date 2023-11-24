const { Schema, model, models } = require("../mongoose");

const foodnSchema = Schema({
    name:{
        type:String,
        // required:true,
       
    },
price:{
    type:Number,
    // required:true,
    
},
description:{
    type : String
    
    
},
// status:{
//     type : String,
//     default:"pending"
    
// },
});

const Foodn = models.Foodn || model("Foodn", foodnSchema);

module.exports = Foodn;
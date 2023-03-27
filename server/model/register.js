const mongoose = require("mongoose");
const loginModel = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    userEmail:{
        type:String,
        required:true,
        unique:true,
    },
    userPassword:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
   
}, {timestamps:true},{
    writeConcern:{
        w:'majority',
        j:true,
        wtimeout:1000
    }
});
module.exports = mongoose.model("UserDatas",loginModel)

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
<<<<<<< HEAD
module.exports = mongoose.model("UserData",loginModel);
=======
module.exports = mongoose.model("UserData",loginModel);   
>>>>>>> 9d09de4735225d7bbfbca5759ce08168ff4215c1

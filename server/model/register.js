const mongoose = require("mongoose");
const loginModel = mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userPassword:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
    }
},{
    writeConcern:{
        w:'majority',
        j:true,
        wtimeout:1000
    }
});
module.exports = mongoose.model()   
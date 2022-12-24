const mongoose = require("mongoose");
const loginModel = mongoose.Schema({
    userEmail:{
        type:String,
        required:true,
    },
    userPassword:{
        type:String,
        required:true,
    }
},{
    writeConcern:{
        w:'majority',
        j:true,
        wtimeout:1000
    }
});
module.exports = mongoose.model()
const mongoose = require("mongoose");
const blogModel =mongoose.Schema({
        place:{
            type:String,
            required:true
        },
        visitedDate:{
            type:Date
        },
        des:{
            type:String,
        },
        image:{
            type:String,
            contentType:String
        },
        postUserName:{
            type:String,
            required:true,
        }
},{timestamps:true});
module.exports =mongoose.model("Blogs",blogModel);
const mongoose = require("mongoose");
const blogModel =mongoose.Schema({
        place:{
            type:String,
            required:true
        },
        visitedDate:{
            type:Date
        },
        desc:{
            type:String,
        },
        image:{
            type:String,
        },
        postUserName:{
            type:String,
        },
        likes:{
            type:Number,
        }
},{timestamps:true});
module.exports =mongoose.model("Blogs",blogModel);
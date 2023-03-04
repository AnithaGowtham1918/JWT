const mongoose = require("mongoose");
const blogModel =mongoose.Schema({
        place:{
            type:String,
            required:true
        },
        visitedDate:{
            type:Number
        },
        image:{
            type:Buffer,
            contentType:String
        }
});
module.exports =mongoose.model("Blogs",blogModel);
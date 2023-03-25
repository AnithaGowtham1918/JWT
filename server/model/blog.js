const mongoose = require("mongoose");
const blogModel =mongoose.Schema({
        place:{
            type:String,
            required:true
        },
        visitedDate:{
            type:Date
        },
        image:{
            type:Buffer,
            contentType:String
        }
});
module.exports =mongoose.model("Blogs",blogModel);
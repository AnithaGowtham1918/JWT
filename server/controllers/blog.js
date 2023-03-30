const Blogs =require("../model/blog");
const createError = require("../utils/error");
//Get all Blog
module.exports.getBlog=async(req,res,next)=>{
    try{
        const data= await Blogs.find();
        res.send(data);
    }
    catch(error){
        return next(createError(error.status,error.message));
    }
};
//Add blog 
module.exports.postBlog=async(req,res,next)=>{
    try{
        const {place,visitedDate,image}=req.body;
        const data= await new Blogs({
            place,
            visitedDate,
            image
        });
        const saved=await data.save();
        res.send(saved);
    }
    catch(error){
       return next(createError(error.status,error.message));
    }   
}

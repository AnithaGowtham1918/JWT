const Blogs =require("../model/blog");
module.exports.getBlog=async(req,res,next)=>{
    try{
        const data= await Blogs.find();
        res.send(data);
    }
    catch(error){
        next(error);
    }
}

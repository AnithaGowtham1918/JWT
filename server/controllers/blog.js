const Blogs =require("../model/blog");
const createError = require("../utils/error");
const User = require("../model/register");

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
    const id=req.body.userId;
    console.log(id);
    const user = await User.findById(id);
    console.log(user);
    const Name= user.userName;
     if(user){
        try{
            const {place,visitedDate,image,desc}=req.body;
           // const image= req.file;
           const postUserName=Name;
            const data= await new Blogs({
                place,
                visitedDate,
                image,
               postUserName,desc
            });
            const saved=await data.save();
            res.send(saved);
        }
        catch(error){
            return next(createError(error.status,error.message));
         }   
     }
     else{
        return next("404","no user found")
     }
   
   
}

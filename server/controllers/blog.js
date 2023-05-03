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
    const user = await User.findById(id);
    const Name= user.userName;
    const userProfilePic = user.profilePicture;
     if(user){
        try{
            if(req.body.image.length>1){
                
            }
            const {place,visitedDate,desc,userId}=req.body;
            const img= req.body.image;
           const image=[];
           for(let i=0;i<img.length;i++){
            image.push(img[i]);
           }
           const postUserName=Name;
            const data= await new Blogs({
                place,
                visitedDate,
                image,
               postUserName,desc,
               userId,
               userProfilePic,
            });
            const saved=await data.save();
            res.send(saved);
        }
        catch(error){
            return next(createError(error.status,error.message));
            console.log(error);
         }   
     }
     else{
        return next("404","no user found")
     }
   
   
}

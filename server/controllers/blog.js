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
   
   
};
//update post
module.exports.updateBlog=async(req,res,next)=>{
    try {
      const updatedPost =await Blogs.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.send(updatedPost);
    } catch (error) {
      return next(createError(error.status,error.message));
    }
};
//delete post
module.exports.deleteBlog=async(req,res,next)=>{
    //const id= req.params.id;
    try {
      await Blogs.findByIdAndDelete(req.params.id);
      res.send("deleted")
      //data.delete();
    } catch (error) {
      return next(createError(error.status,error.message));
      
    }
  
  };
  //singlePost
  module.exports.singlePost=async(req,res,next)=>{
    try {
      const singlePost = await Blogs.findOne({_id:req.params.id});
      res.send(singlePost);
    } catch (error) {
      next(createError(404,error.message));
    }
  };
  //specificUserPost
  module.exports.specificUserPost=async(req,res,next)=>{
    try {
      const data = await Blogs.find({userId:req.params.id});
      console.log(data);
      res.send(data);
    } catch (error) {
      next(createError(404,error.message));
      
    }
  };
  //add like
  module.exports.addLike=async(req,res,next)=>{
    const id=req.body.id;
    console.log(id);
    try{
     const saved = await Blogs.findByIdAndUpdate(req.params.id,{
      $push:{likes:id}
     },{new:true});
    res.send(saved);
    }
    catch(error){
   next(createError(422,error.message));
    }
  };
  //add unlike
  module.exports.addUnlike=async(req,res,next)=>{
    const id=req.body.id;
    console.log(id);
    try{
     const saved = await Blogs.findByIdAndUpdate(req.params.id,{
      $pull:{likes:id}
     },{new:true});
    res.send(saved);
    }
    catch(error){
   next(createError(422,error.message));
    }
  };
  //updateUserProfilePic
  module.exports.updateUserProfilePic=async(req,res,next)=>{
    try{
      const id=req.params.id;
      const blog = await Blogs.find({userId:id});
      console.log(req.body.profilePic);
      for(const i of blog){
        await Blogs.findByIdAndUpdate({_id:i._id},
          {$set:{postUserName:req.body.userName,userProfilePic:req.body.profilePicture}},
          {new:true})
       }
      res.send(blog);
      //console.log(blog);
    }
    catch(error){
      next(createError(error.status,error.message));
    }
   
  };
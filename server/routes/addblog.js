const router = require("express").Router();
const {getBlog,postBlog}= require("../controllers/blog");
const Blogs =require("../model/blog");
const createError = require("../utils/error");
const verify =require("../controllers/authVerify");
//Get All Post
router.get("/addblog",getBlog);
//Create Post
router.post("/postblog",verify,postBlog);
//Update Post
router.put("/:id",async(req,res,next)=>{

    try{
      const data= await Blogs.findById(req.params.id);
      if(data.userName === req.body.userName){
        try {
          const updatedPost =await Blogs.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
          res.send(updatedPost);
        } catch (error) {
          return next(createError(error.status,error.message));
        }
      }
      else{
        next(createError(401,"you are allowed to update this"));
      }
    }catch(error){
       return next(createError(error.status,error.message));
    }
});
//Delete post
router.delete("/deleteblog/:id",async(req,res,next)=>{
  //const id= req.params.id;
  try {
    const data = await Blogs.findByIdAndDelete(req.params.id);
    res.send("deleted")
    //data.delete();
  } catch (error) {
    return next(createError(error.status,error.message));
    
  }

});
//Get single post
router.get("/:id",async(req,res,next)=>{
  try {
    const singlePost = await Blogs.findOne({_id:req.params.id});
    res.send(singlePost);
  } catch (error) {
    next(createError(404,error.message));
  }
});
//Get particular user post

module.exports= router;
const router = require("express").Router();
const {getBlog,postBlog}= require("../controllers/blog");
const Blogs =require("../model/blog");
const createError = require("../utils/error");
const verify =require("../controllers/authVerify");
//Get Post
router.get("/addblog",getBlog);
//Create Post
router.post("/postblog",verify,postBlog);
//Update Post
router.put("/:id",async(req,res)=>{
    try{
      const data= await Blogs.findByIdAndUpdate(req.params.id);
    }catch(error){

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
module.exports= router;
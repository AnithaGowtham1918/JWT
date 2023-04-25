const router = require("express").Router();
const user = require("../model/register");
const bcrypt = require("bcrypt");
const createError = require("../utils/error");
//Update user
router.put("/:id",async(req,res,next)=>{
  const data = await user.findById(req.params.id);
      if(req.body.userPassword!=data.userPassword){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
      }
      try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true});
        res.status(200).json(updatedUser);
      } catch (error) {
         return next(createError(error.status,error.message));
      }
    }

);
//delete user
router.delete("/:id",async(req,res,next)=>{
  if(req.body.userId===req.params.id){
    try {
      await user.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (error) {
      return next(createError(404,"User not found"));
    }

  }
  else{
    return next(createError(405,"You can delete only your account"));
  }

});
//Get User
router.get("/:id",async(req,res,next)=>{
    try {
      const User= await user.findById(req.params.id);
      res.send(User);
    } catch (error) {
      return next(createError(405,"User not found"));
    }
});
module.exports=router;
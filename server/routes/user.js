const router = require("express").Router();
const createError = require("../utils/error");
const user = require("../model/register.js");
//const { updateUser, deleteUser, getUser } = require("../controllers/user");
//Update user
router.put("/:id",async(req,res,next)=>{
    const data = await user.findById(req.params.id);
        try {
          const updatedUser = await user.findByIdAndUpdate(req.params.id,{
              $set:req.body,
          },{new:true});
          res.status(200).json(updatedUser);
        } catch (error) {
           return next(createError(error.status,error.message));
        }
      });
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
router.get("/:userid",async(req,res,next)=>{
    try {
      const User= await user.findById(req.params.userid);
      res.send(User);
    } catch (error) {
      return next(createError(405,"User not found"));
    }
});
//change password
module.exports=router;
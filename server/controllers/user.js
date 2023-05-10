const Login =require("../model/register.js");
const createError = require("../utils/error");
const bcrypt=require("bcrypt");
const user = require("../model/register");
const { use } = require("../routes/user.js");
//Loginrouter
module.exports.loginData=async(req,res,next)=>{
    const Email= req.body.userEmail;
    const password=req.body.userPassword;
   
    try{
        const data= await Login.findOne({userEmail:Email});
        if(data){
            const comparepassword= await bcrypt.compare(password,data.userPassword);
            if(comparepassword){
               const {userPassword, isAdmin,...others}=data._doc;
                res.json({...others});
            }
            else{
              return  next(createError(404,"wrong password"));
            }
        }
        else{
            return next(createError(404,"Users not Found"));
        }
    }
    catch(error){
        return next(createError(error.status,error.message));
    }
};
//RegisterRouter
module.exports.registerData=async(req,res,next)=>{
    try {
        const {userName,userEmail,isAdmin,profilePicture}=req.body;
   const password= req.body.userPassword;
   const rounds=10;
   const salt= await bcrypt.genSalt(rounds);
  const hashedPassword= await bcrypt.hash(password,salt);
    const data= new Login({
        userName,
        userEmail,
       userPassword:hashedPassword,
       profilePicture,
   
        
    });
    const saved = await data.save();
    res.send(saved);
    } catch (error) {
        return next(createError(404,"User already present"));                                           
        
    }
    
};
//updateUser
module.exports.updateUser=async(req,res,next)=>{
    const data = await user.findById(req.params.id);
        try {
          const updatedUser = await user.findByIdAndUpdate(req.params.id,{
              $set:req.body,
          },{new:true});
          res.status(200).json(updatedUser);
        } catch (error) {
           return next(createError(error.status,error.message));
        }
      }
  //deleteUser
  module.exports.deleteUser=async(req,res,next)=>{
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
  
  }
  //getUser
  module.exports.getUser=async(req,res,next)=>{
    try {
      const User= await user.findById(req.params.id);
      res.send(User);
    } catch (error) {
      return next(createError(405,"User not found"));
    }
}
//changePassword
module.exports.changePassword=async(req,res,next)=>{
  const userEmail=req.params.email;
  const data=await user.findOne({userEmail:userEmail});
  try {
    const updatedData = await user.findByIdAndUpdate({_id:data._id},{$set:{userPassword:req.body.userPassword}},{new:true});
    res.send("Password Changed");
  } catch (error) {
    next(createError(error.status,error.message));
  }
}
const router = require("express").Router();
const Login =require("../model/register");
const bcrypt=require("bcrypt");
const createError = require("../utils/error");
router.get("/logindata",async(req,res,next)=>{
    const userEmail= req.body.userEmail;
    const password=req.body.userPassword;
    const data= await Login.findOne({userEmail});
    if(data){
        const comparepassword= await bcrypt.compare(password,data.userPassword);
        if(comparepassword){
            const {userPassword, isAdmin,...others}=data._doc;
            res.send({...others});
        }
        else{
           next(createError(404,"wrong password"));
        }
    }
    else{
        next(createError(404,"User not Found"));
    }
   // res.send(data);
});
router.post("/registerdata",async(req,res,next)=>{
    try {
        const {userName,userEmail,isAdmin,userPassword}=req.body;
   const password= req.body.userPassword;
   const rounds=10;
   const salt= await bcrypt.genSalt(rounds);
  const hashedPassword= await bcrypt.hash(password,salt);
    const data= new Login({
        userName,
        userEmail,
       userPassword:hashedPassword,
        isAdmin
        
    });
    const saved = await data.save();
    res.send(saved);
    } catch (error) {
        return next(createError(error.status,error.message));                                           
        
    }
    
});

module.exports= router;
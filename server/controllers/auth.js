const Login =require("../model/register.js");
const createError = require("../utils/error");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
//Loginrouter
module.exports.loginData=async(req,res,next)=>{
    const Email= req.body.userEmail;
    const password=req.body.userPassword;
   
    try{
        const data= await Login.findOne({userEmail:Email});
        if(data){
            const comparepassword= await bcrypt.compare(password,data.userPassword);
            if(comparepassword){
                const accessToken = jwt.sign({id:data._id,isAdmin:data.isAdmin},"secretkey");
                console.log(accessToken);
               const {userPassword, isAdmin,...others}=data._doc;
                res.json({...others,accessToken});
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
        const {userName,userEmail,isAdmin}=req.body;
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
        return next(createError(404,"User already present"));                                           
        
    }
    
};

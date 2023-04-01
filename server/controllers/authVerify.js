const createError = require("../utils/error");
const jwt = require("jsonwebtoken");
const verify=(req,res,next)=>{
    const authHeaders =req.headers["authorization"];
    console.log(authHeaders);
    if(authHeaders){
        const token = authHeaders.split(" ")[1];
        jwt.verify(token,"secretkey",(err,data)=>{
            if(err){
                return next(createError(403,"Token is not valid"));
            }
            else{
            next();
            }
        })

    }
    else{
        return next(createError(401,"You are not authenticated"));
    }

};
module.exports= verify;
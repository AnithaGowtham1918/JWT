const express = require("express");
const app = express();
const addBlog = require("./routes/addblog");
const login = require("./routes/login.js")
const cors=require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/blog",addBlog);
app.use("/api",login);
app.use("/user",userRouter);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
   // useUnifiedToplogy: true,
    //useCreateIndex:true,
}).then( console.log("DB connection sucessfull")).catch((error)=> {
        console.log(error);
        
 })
app.use((error,req,res,next)=>{
    const errorStatus= error.status || 500;
    const errorMessage=error.message || "Something went wrong";
   return  res.status(errorStatus).json({
    success:false,
    message:errorMessage,
    stack:error.stack,
   });
})
app.listen("4000",(req,res)=>{
    console.log("server is up and running");
});
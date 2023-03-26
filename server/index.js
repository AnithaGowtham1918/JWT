const express = require("express");
const app = express();
const addBlog = require("./routes/addblog");
const login = require("./routes/login");
const cors=require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
app.use("/blog",addBlog);
app.use("/api",login);
mongoose.connect("mongodb+srv://ani:aniTHA@cluster0.izsegqa.mongodb.net/JWT?retryWrites=true&w=majority",()=>{
    try {
        console.log("DB connection sucessfull");
    } catch (error) {
        console.log(error);
        
    }
});
app.use((error,req,res,next)=>{
    const errorStatus= error.status || 500;
    const errorMessage=error.message || "Something went wrong";
   return  res.status(errorStatus).json({
    success:false,
    message:errorMessage,
    stack:error.stack,
   });
})
app.listen("5000",(req,res)=>{
    console.log("server is up and running");
});
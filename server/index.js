const express = require("express");
const app = express();
const blog = require("./routes/blogs");
const addBlog = require("./routes/addblog");
const login = require("./routes/login");
const register = require("./routes/register");
const deleteRoute = require("./routes/delete");
const { default: mongoose } = require("mongoose");
app.use("/api",blog);
app.use("/blog",addBlog);
app.use("/api",login);
app.use("/api",register);
app.use("/api",deleteRoute);
mongoose.connect("mongodb+srv://ani:<password>@cluster0.izsegqa.mongodb.net/?retryWrites=true&w=majority",()=>{
    try{
        console.log("Db connected succcessfully");
    }
    catch(error){
        console.log(error);
    }
});
app.use("/",(req,res)=>{
    res.send("hai its almost working");
});
app.listen("3000",(req,res)=>{
    console.log("server is up and running");
})
const express = require("express");
const app = express();
const addBlog = require("./routes/addblog");
const login = require("./routes/login.js")
const cors=require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const multer = require("multer");
const path = require('path');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/blog",addBlog);
app.use("/api",login);
app.use("/user",userRouter);
app.use("/images", express.static(path.join(__dirname, "/images")));
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
});
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    try{
     //console.log(res.data);
      res.status(200).json("File has been uploaded");
    }
    catch(error){
      console.log(error);
    }
    
  });
app.listen("4000",(req,res)=>{
    console.log("server is up and running");
});
const express = require("express");
const app = express();
const addBlog = require("./routes/addblog");
const login = require("./routes/login.js")
const cors=require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const multer = require("multer");
const path = require("path");
dotenv.config();
//app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(express.static("./public"));
app.use(cors());
app.use(express.json());
app.use("/blog",addBlog);
app.use("/api",login);
app.use("/user",userRouter);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
}).then( console.log("DB connection sucessfull")).catch((error)=> {
        console.log(error);
        
 });
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
      cb(null, "./public/images");
    },
    filename: (req, file, cb) => {
      //console.log("reqinmul:",req);
     // console.log("fileinmul:",file);
     // console.log("bodyinmul:",req.body);
     // cb(null, req.body.name);
     let name=req.body.name;
     cb(null,name);
     }
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload",upload.single("file"),(req, res) => {
    try{
      //console.log("file:",req.file);
    //console.log("body:",req.body);
      res.status(200).json("File has been uploaded");
    }
    catch(error){
      console.log(error);
    }
    
  });
  app.post("/uploadmultiple",upload.array("file",10)
  ,(req,res)=>{
   try {
   // console.log("file:",req);
  console.log("body:",req.body);
     res.status(200).json("Multiple file uploaded successfully");
   } catch (error) {
    console.log(error);
  }
  }
  )
app.listen("4000",(req,res)=>{
    console.log("server is up and running");
});
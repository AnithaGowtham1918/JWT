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
const bodyParser = require('body-parser')
dotenv.config();
app.use(express.static(path.join(__dirname, "./public/images")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
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
    destination:function (req, file, cb){
      cb(null,"./public/images");
    },
    filename: function (req, file, cb){
      cb(null,req.body.name);
     }
  });
let maxSize=2*1000*1000;
  const upload = multer({ storage: storage,limit:{filesize:maxSize} });
  app.post("/upload",upload.single("file"),(req, res) => {
    try{
      console.log("file:",req.file);
      res.status(200).json("File has been uploaded");
    }
    catch(error){
      console.log(error.message);
    }
    
  });
app.listen("4000",(req,res)=>{
    console.log("server is up and running");
});
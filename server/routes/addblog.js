const router = require("express").Router();
const {getBlog}= require("../controllers/blog");
const Blogs =require("../model/blog");
router.get("/addblog",getBlog);
router.post("/postblog",async(req,res)=>{
try{
    const {place,visitedDate,image}=req.body;
    const data= await new Blogs({
        place,
        visitedDate,
        image
    });
    const saved=await data.save();
    res.send(saved);
}
catch(error){
    res.send(error);
}
    
})
module.exports= router;
const router = require("express").Router();
router.get("/delete",(req,res)=>{
    res.send("This is a delete router");
});
module.exports= router;
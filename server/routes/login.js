const router = require("express").Router();
router.get("/login",(req,res)=>{
    res.send("This is a login router");
});
module.exports= router;
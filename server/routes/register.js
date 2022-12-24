const router = require("express").Router();
router.get("/register",(req,res)=>{
    res.send("This is a register router");
});
module.exports= router;
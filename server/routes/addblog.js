const router = require("express").Router();
router.get("/addblog",(req,res)=>{
    res.send("This is a add blog router");
});
module.exports= router;
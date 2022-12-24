const router = require("express").Router();
router.get("/blog",(req,res)=>{
    res.send("this is a blog router");
});
module.exports = router;
const router = require("express").Router();
const {getBlog,postBlog, updateBlog, deleteBlog, singlePost, specificUserPost, addLike, addUnlike, updateUserProfilePic}= require("../controllers/blog");
const Blogs =require("../model/blog");
const createError = require("../utils/error");
const User = require("../model/register");
//Get All Post
router.get("/addblog",getBlog);
//Create Post
router.post("/postblog",postBlog);
//Update Post
router.put("/:id",updateBlog);
//Delete post
router.delete("/deleteblog/:id",deleteBlog);
//Get single post
router.get("/:id",singlePost);
// get specific user post
router.get("/specific/:id",specificUserPost);
//add like
router.put("/addLike/:id",addLike);
//add unlike
router.put("/unLike/:id",addUnlike);
//update userProfilePic
router.put("/profilePic/:id",updateUserProfilePic);
module.exports= router;
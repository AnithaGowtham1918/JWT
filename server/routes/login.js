const router = require("express").Router();
const Login =require("../model/register.js");
const createError = require("../utils/error");
const {loginData,registerData}=require("../controllers/auth");
//Login
router.post("/logindata",loginData);
//Register
router.post("/registerdata",registerData);
module.exports= router;
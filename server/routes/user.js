const router = require("express").Router();
const createError = require("../utils/error");
const { updateUser, deleteUser, getUser } = require("../controllers/user");
//Update user
router.put("/:id",updateUser);
//delete user
router.delete("/:id",deleteUser);
//Get User
router.get("/:id",getUser);
//change password
// router.put("/change/:email",changePassword);
module.exports=router;
const express = require("express");
const { getUserController, updateUserController, resetPasswordController, updatePasswordController, deleteProfileController } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
//Get User || Get
router.get("/getUser",authMiddleware, getUserController);

//Update Profile
router.put("/updateUser", authMiddleware, updateUserController);

//Password Update
router.post("/updatePassword", authMiddleware, updatePasswordController);

//Reset Password
router.post("/resetPassword", authMiddleware, resetPasswordController);

//delete User
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

module.exports = router;

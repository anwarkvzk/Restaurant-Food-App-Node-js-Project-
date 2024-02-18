const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/restuarentController");

const router = express.Router();

//router
//Create Restuarent || Post
router.post("/create", authMiddleware, createResturantController);

//Get ALl Resturants || Get
router.get("/getAll", authMiddleware, getAllResturantController);

//Get Resturant By Id || Get
router.get("/get/:id", getResturantByIdController);

//Delete Resturant ||Delete
router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;

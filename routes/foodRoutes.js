const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const router = express.Router();

//routes
//Create Food
router.post("/create", authMiddleware, createFoodController);

//Get All Food
router.get("/getAll", getAllFoodController);

//get single Food
router.get("/get/:id", getSingleFoodController);

//get food by resturant
router.get("/getByResturant/:id", getFoodByResturantController);

//Update Food
router.put("/update/:id", authMiddleware, updateFoodController);

//Delete Food
router.delete("/delete/:id", authMiddleware, deleteFoodController);

//place order
router.post("/placeorder", authMiddleware, placeOrderController);

//Order Status
router.post("/orderStatus/:id", adminMiddleware, orderStatusController);

module.exports = router;

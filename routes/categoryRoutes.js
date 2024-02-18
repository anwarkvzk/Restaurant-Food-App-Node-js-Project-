const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createdCatController,
  getAlCatController,
  updateCatController,
  deleteCatController,
} = require("../controllers/categoryController");

const router = express.Router();

//routers
//Create categoty
router.post("/create", authMiddleware, createdCatController);

//get All Category
router.get("/getAll", getAlCatController);

//Update Category
router.put("/update/:id", authMiddleware, updateCatController);

//Delete Cat
router.delete("/delete/:id", authMiddleware, deleteCatController);

module.exports = router;

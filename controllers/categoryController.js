const categoryModel = require("../models/categoryModel");

//created Cat
const createdCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    //validation
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Categoy title Or image",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(201).send({
      success: true,
      message: "category Created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Cat API",
      error,
    });
  }
};

//Get All Cat
const getAlCatController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "No Categories Found",
      });
    }
    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Category API",
      error,
    });
  }
};

//update Category
const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(500).send({
        success: false,
        message: "No Category found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update Category Api",
      error,
    });
  }
};

//Delete Cat
const deleteCatController = async (req, res) => {
  try {
    const {id} = req.params
    if(!id){
      return res.status(500).send({
        success: false,
        message: 'Please Provide Category Id'
      })
    }
    const category = await categoryModel.findById(id)
    if(!category){
      return res.status(500).send({
        success: false,
        message: 'No Category Found with this id'
      })
    }
    await categoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success: true,
      message: 'Category Deleted Successfully'
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Delete Api",
      error,
    });
  }
};

module.exports = {
  createdCatController,
  getAlCatController,
  updateCatController,
  deleteCatController,
};

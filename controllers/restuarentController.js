const resturantModel = require("../models/resturantModel");

//Create Resturant
const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imgUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    //validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Title And Address",
      });
    }
    const newResturent = new resturantModel({
      title,
      imgUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    await newResturent.save();
    res.status(201).send({
      success: true,
      message: "New Resturant Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Create Resturant Api",
      error,
    });
  }
};

//Get All  Resturant
const getAllResturantController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Available",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get All Resturant Api",
      error,
    });
  }
};

//Get Resturant By id
const getResturantByIdController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Resturant Id",
      });
    }
    //find resturant
    const resturant = await resturantModel.findById(resturantId);
    //validation
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "No resturant Found",
      });
    }
    res.status(200).send({
      success: true,
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Resturant By Id Api",
      error,
    });
  }
};

//Delete Resturant
const deleteResturantController = async (req, res) => {
 try {
  const resturantId = req.params.id
  
  if(!resturantId){
    return res.status(404).send({
      success:false,
      message: 'No Resturant Found Or Provide Resturant Id'
    })
  }
  await resturantModel.findByIdAndDelete(resturantId)
  res.status(200).send({
    success: true,
    message: 'Resturant Deleted Successfully'
  })

 } catch (error) {
   console.log(error);
   res.status(500).send({
     success: false,
     message: "Error In Delete Resturant Api",
     error,
   });
 }
};
module.exports = {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
};

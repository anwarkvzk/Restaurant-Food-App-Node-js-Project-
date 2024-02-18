const mongoose = require("mongoose");

//schema
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food title is require"],
    },
    description: {
      type: String,
      required: [true, "Food description is require"],
    },
    price: {
      type: Number,
      required: [true, "Food Price is Require"],
    },
    imageURl: {
      type: String,
      default:
        'https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png',
    },
    foodTags: {
      type: String,
    },
    category: {
      type: String,
    },
    code: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restuarant",
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//export
module.exports = mongoose.model("Foods", foodSchema);

import mongoose from "mongoose";

// schema for product data
const productSchema = mongoose.Schema(
  {
    // product title
    title: {
      type: String,
      required: true,
    },

    // product price
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    // short details about product
    description: {
      type: String,
      required: true,
    },

    // available stock
    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    // product category
    category: {
      type: String,
      required: true,
    },

    // image url of product
    image: {
      type: String,
    },
  },
  {
    // create timestamps automaticly
    timestamps: true,
  },
);

// create product model
const Product = mongoose.model("Product", productSchema);

export default Product;

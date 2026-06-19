import Product from "../models/Product.js"; 
import mongoose from "mongoose";

// get all products from database
export const getProducts = async (req, res) => {
  try {
    // fetch all products
    const products = await Product.find();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    // if any error happen
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get one product using id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // check id format is valid or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
    }

    // find product by id
    const product = await Product.findById(id);

    // product not found
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    // server error
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// create new product
export const createProduct = async (req, res) => {
  try {
    // create many products together
    if (Array.isArray(req.body)) {
      const products = await Product.insertMany(req.body);

      return res.status(201).json({
        success: true,
        message: `${products.length} products created successfully`,
        products,
      });
    }

    // get product data from request
    const { title, price, description, stock, category, image } = req.body;

    // check required fields
    if (!title || price == null || !category) {
      return res.status(400).json({
        success: false,
        message: "Title, Price and Category are required",
      });
    }

    // save product in database
    const product = await Product.create({
      title,
      price,
      description,
      stock,
      category,
      image,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    // if create fail
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update existing product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // check id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
    }

    // update product details
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    // product not found
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    // update error
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // validate product id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Product ID",
      });
    }

    // remove product from db
    const product = await Product.findByIdAndDelete(id);

    // product not found
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    // delete failed
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

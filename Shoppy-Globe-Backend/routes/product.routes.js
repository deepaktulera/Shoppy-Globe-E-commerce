import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// get all products
router.get("/", getProducts);

// get single product by id
router.get("/:id", getProductById);

// create new product
router.post("/", createProduct);

// update product details
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

export default router;

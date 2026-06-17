import express from "express";
import jwt from 'jsonwebtoken'
import { getProducts , getProductById , createProduct , updateProduct, deletProduct} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deletProduct);

export default router;
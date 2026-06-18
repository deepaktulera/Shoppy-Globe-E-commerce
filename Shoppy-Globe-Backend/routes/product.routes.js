import express from "express";
import jwt from 'jsonwebtoken'
import { getProducts , getProductById , createProduct , updateProduct, deleteProduct} from "../controllers/product.controller.js";
import { protect } from "../middleware/protect.middleware.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
import express from "express";
import { addCartProduct , updateCartItem , deleteCartItem, showCart } from "../controllers/cart.controller.js";
import { protect } from "../middleware/protect.middleware.js";

const router = express.Router();

router.get("/", protect, showCart);
router.post("/", protect, addCartProduct);
router.put("/:id", protect, updateCartItem);
router.delete("/:id", protect, deleteCartItem);

export default router;
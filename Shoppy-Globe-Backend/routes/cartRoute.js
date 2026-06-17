import express from "express";
import { addCartProduct , updateCartItem , deleteCartItem, showCart } from "../controllers/cart.controller.js";
import { protect } from "../middleware/protect.middleware.js";

const router = express.Router();

router.get("/cart" , protect , showCart)
router.post("/cart", protect , addCartProduct);
router.put("/cart/:id" , protect , updateCartItem);
router.delete("/cart/:id" , protect , deleteCartItem);

export default router;
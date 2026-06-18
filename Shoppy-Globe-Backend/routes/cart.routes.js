import express from "express";
import {
  addCartProduct,
  updateCartItem,
  deleteCartItem,
  showCart,
} from "../controllers/cart.controller.js";
import { protect } from "../middleware/protect.middleware.js";

const router = express.Router();

// get all cart products of logged in user
router.get("/", protect, showCart);

// add product into cart
router.post("/", protect, addCartProduct);

// update quantity of cart item
router.put("/:id", protect, updateCartItem);

// remove product from cart
router.delete("/:id", protect, deleteCartItem);

export default router;

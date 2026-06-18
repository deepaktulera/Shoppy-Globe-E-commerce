import mongoose from "mongoose";

// cart schema for storing cart items
const cartSchema = mongoose.Schema(
  {
    // store user id who own this cart item
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // store product id added in cart
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // quantity of product in cart
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    // auto create createdAt and updatedAt
    timestamps: true,
  },
);

// create cart model
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;

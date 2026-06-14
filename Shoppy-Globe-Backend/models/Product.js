import mongoose from "mongoose";
import { StrictMode } from "react";

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true  , min: 0,},
    description: { type: String, required: true },
    stock: { type: Number, required: true , min: 0,},
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product' , productSchema);

export default Product;
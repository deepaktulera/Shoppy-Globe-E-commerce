import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDatabase from "./config/database.js";

import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect mongodb database
connectDatabase();

// middlewares
app.use(cors());
app.use(express.json());

// just checking server is running or not
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shoppy Globe API is running",
  });
});

// all routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

// test route
app.get("/test", (req, res) => {
  res.send("Server working");
});

// if route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// handle server errors
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// start server
app.listen(PORT, () => {
  console.log("Server running");
});

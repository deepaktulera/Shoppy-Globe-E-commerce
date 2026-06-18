import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

import connectDatabase from "./config/database.js";

import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
connectDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Shoppy Globe API is running"
    });
});

// Routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);
app.get("/test", (req, res) => {
    res.send("Server working");
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

// Server
app.listen(PORT, () => {
    console.log("🚀 Server running");
});
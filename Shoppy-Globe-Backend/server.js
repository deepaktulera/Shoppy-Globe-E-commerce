import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import productRoutes from "./routes/productRoute.js";

dotenv.config();

const app = express();

connectDatabase();

app.use(express.json());

app.use("/", productRoutes);

app.listen(5000, () => {
    console.log("Server Started");
});
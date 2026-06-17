import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import productRoutes from "./routes/productRoute.js";
import cartRoute from './routes/cartRoute.js';
import authRoute from './routes/authRoutes.js';

dotenv.config();

const app = express();

connectDatabase();

app.use(express.json());

app.use("/", productRoutes);
app.use("/", cartRoute);
app.use("/" , authRoute)

app.listen(5000, () => {
    console.log("Server Started");
});
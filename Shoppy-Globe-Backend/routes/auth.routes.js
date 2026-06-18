import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

const router = express.Router();

// login existing user
router.post("/login", loginUser);

// register new user
router.post("/register", registerUser);

export default router;

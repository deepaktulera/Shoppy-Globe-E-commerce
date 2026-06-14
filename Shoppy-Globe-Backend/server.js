import express from 'express';
import connectDatabase from './config/database.js';
import dotenv from "dotenv";

const app = new express();
dotenv.config();

connectDatabase()

app.listen('5000' , (req , res) =>{
    console.log("Server Started");
})
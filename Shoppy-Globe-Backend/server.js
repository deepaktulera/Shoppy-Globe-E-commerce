import express from 'express';

const app = new express();

app.listen('5000' , (req , res) =>{
    console.log("Server Started");
})
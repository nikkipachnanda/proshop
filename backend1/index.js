import express from 'express';
import connectDb from './data/config.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
import dotenv  from 'dotenv';
dotenv.config();

connectDb();

//const express  = require('express');

const port =  5000;

const app = express();

//body parser
app.use(express.json());

app.use(express.urlencoded({extended:true}));

//Cookie parser middleware

app.use(cookieParser());

app.get("/", (req, res)=>
{
    res.send("APi is running");
})

app.use('/api/products',productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) => res.send({clientId:process.env.PAYPAL_CLIENT_ID}))

app.listen(port,()=> console.log(`Server running on port ${port}`));
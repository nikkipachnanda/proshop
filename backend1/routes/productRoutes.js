import React from 'react';
// import products from '../data/products.js';
import express from 'express';
import { getProductById, getProducts } from '../controllers/productController.js'

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);



export default router;


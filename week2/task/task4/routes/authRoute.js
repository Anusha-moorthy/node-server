import express from 'express';
import { createProduct, getProduct } from '../controllers/productController.js';

const route = express.Router()

route.post('/product', createProduct)

route.get('/products', getProduct)

export default route
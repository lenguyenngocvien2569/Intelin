import express from 'express';
const router = express.Router();
const Product_Controller = require('../controllers/Product/product.controller')

router.get('/get',Product_Controller.getAllProduct);

export default router;
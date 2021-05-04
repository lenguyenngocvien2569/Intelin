import express from 'express';
const router = express.Router();
//const product_route = require('./product.route');
const Product_Controller = require('../controllers/Product/product.controller');
router.get('/product/get',Product_Controller.getAllProduct);
router.post('/product/create',Product_Controller.insertNewProduct)
module.exports = router;
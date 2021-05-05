import express from 'express';
const router = express.Router();
const product_route = require('./product.route');
const category_route = require('./category.route');
router.use('/product',product_route);
router.use('/category', category_route);
module.exports = router;
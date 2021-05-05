import express from 'express';
const router = express.Router();
const product_route = require('./product.route');

router.use('/product',product_route);

module.exports = router;
import express from 'express';
const router = express.Router();
const Product_Controller = require('../controllers/Product/product.controller')

router.get('/get',Product_Controller.getAllProduct);
router.post('/create',Product_Controller.insertNewProduct);
router.delete('/delete',Product_Controller.deleteProduct);
router.put('/update',Product_Controller.updateProduct)

module.exports = router;
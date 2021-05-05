import express from 'express';
const router = express.Router();
const Category_Controller = require('../controllers/Category/category.controller')

router.get('/get',Category_Controller.getAllCategory);
// router.post('/create',Product_Controller.insertNewProduct);
// router.delete('/delete',Product_Controller.deleteProduct);
// router.put('/update',Product_Controller.updateProduct)

module.exports = router;
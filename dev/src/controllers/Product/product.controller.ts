import {Request,Response,NextFunction} from "express";
const Product = require('./product.class');
const FUNCTION_ERROR_CODE = require('../../helpers/error/error.function');
class Product_Controller {
    getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await Product.find();
            res.send(products);
        } catch (error) {
            console.log(FUNCTION_ERROR_CODE)
            console.log(FUNCTION_ERROR_CODE.CONTROLLER_ERROR_CODE)
            next(FUNCTION_ERROR_CODE.CONTROLLER_ERROR_CODE);
        }
        
    }
    insertNewProduct = async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const { product_name,
                product_price,
                category_id,
                product_description,
                create_date,
                update_date } = req.body;
            const insertProduct = await Product.insert(product_name,
                category_id, product_description, product_price, create_date, update_date);
        res.send(insertProduct);
        } catch (error) {
            next(error);
        }
    }
    deleteProduct = async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const {id} = req.query;
        const deleteProduct = await Product.delete(id);
        res.send(deleteProduct);
        } catch (error) {
            next(error);
        }
    }
    updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.query;
            const {product_name,
                product_price,
                category_id,
                product_description,
                create_date,
                update_date} = req.body;
            const updateProduct = await Product.update(id,product_name,category_id,product_description,product_price,create_date,update_date);
            res.send(updateProduct);
        } catch (error) {
            next(error);
        }
       
    }
}
module.exports = new Product_Controller;
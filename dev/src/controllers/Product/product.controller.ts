import {Request,Response} from "express";
const Product = require('./product.class');
class Product_Controller {
    getAllProduct = async (req:Request,res:Response) =>{
        const products = await Product.find()
        res.send(products)
    }
    insertNewProduct = async(req:Request,res:Response)=>{
        const { product_name,
                product_price,
                category_id,
                product_description,
                create_date,
                update_date } = req.body;
        const insertProduct = await Product.insert(product_name,category_id,product_description,product_price,create_date,update_date);
        res.send(insertProduct);
    }
    deleteProduct = async(req:Request,res:Response)=>{
        const {id} = req.query;
        const deleteProduct = await Product.delete(id);
        res.send(deleteProduct);
    }
    updateProduct = async(req:Request,res:Response)=>{
        const {id} = req.query;
        const {product_name,
            product_price,
            category_id,
            product_description,
            create_date,
            update_date} = req.body;
        const updateProduct = await Product.update(product_name,category_id,product_description,product_price,create_date,update_date);
        res.send(updateProduct);
    }
}
module.exports = new Product_Controller;
import express,{Request,Response} from "express";
const db = require('../../utils/connection');
//const Product = require('./product.class');
class Product_Controller {
    getAllProduct = async (req:Request,res:Response) =>{
        let sql = `SELECT * FROM Products`;
        db.query(sql,(error: Object,rows:Array<null>,fields:Object)=>{
            if (error) throw error;
            res.send(rows);
        })
    }
    insertNewProduct = async(req:Request,res:Response)=>{
        const { product_name,
                product_price,
                category_id,
                product_description,
                create_date,
                update_date } = req.body;
        let sql = `INSERT INTO Products (product_name,category_id,product_description,product_price,create_date,update_date) 
                    VALUES ('${product_name}','${category_id}','${product_description}','${product_price}','${create_date}','${update_date}')`
        db.query(sql,(error:Object,result: Object)=>{
            if(error) throw error;
            res.send(result);
        })
    }
    deleteProduct = async(req:Request,res:Response)=>{
        const {id} = req.body;
        let sql = `DELETE FROM Products Where product_id=${id}`;
        db.query(sql,(error:Object,result: Object)=>{
            if(error) throw error;
            res.send(result);
        })
    }
}
module.exports = new Product_Controller;
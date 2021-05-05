import { Product_Interface } from "./product.interface";
const db = require('../../utils/maria.connection');
const escapeParams = require('../../utils/escape');
class Product {
    tableName = 'Products';
    find =  async() =>{
        let sql = `SELECT * FROM ${this.tableName}`;
        return await db.query(sql);
    }
    insert = async(product_name:String,category_id:Number,product_description:String,product_price:Number,create_date:Date,update_date:Date)=>{
        //const escaped = escapeParams([product_name,category_id,product_description,product_price,create_date,update_date]);
        let sql = `INSERT INTO Products (product_name,category_id,product_description,product_price,create_date,update_date) 
        VALUES ('${product_name}','${category_id}','${product_description}','${product_price}','${create_date}','${update_date}')`;
        return await db.query(sql)
    }
    delete = async(id:Number)=>{
        let sql =`DELETE FROM Products Where product_id=${id}`;
        return await db.query(sql);
    }
    update = async(product_id:Number, product_name:String,category_id:Number,product_description:String,product_price:Number,create_date:Date,update_date:Date)=>{
        let sql = ` UPDATE Products 
                    SET product_name = '${product_name}',
                        category_id = '${category_id}',
                        product_description = '${product_description}',
                        product_price = '${product_price}',
                        create_date = '${create_date}',
                        update_date = '${update_date}',
                    WHERE product_id = '${product_id}'`;
        return await db.query(sql);
    }
}

module.exports = new Product;
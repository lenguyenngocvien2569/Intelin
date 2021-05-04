import { Product_Interface } from "./product.interface";
const db = require('../../utils/connection')
class Product {
    tableName = 'Categories';
    find = () =>{
        let sql = `SELECT * FROM ${this.tableName}`;
        return db.query(sql)
    }
}

module.exports = new Product;
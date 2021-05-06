//const Validator_Service = require('../../validators/product.validate');
const {mariaDb} = require('../../utils/maria.connection');
const escapeParams = require('../../utils/escape');
class Product   {
    tableName = 'Products';
    find =  async() =>{
        let sql = `SELECT * FROM ${this.tableName}`;
        return await mariaDb.query(sql);
    }
    insert = async(product_name:String,category_id:Number,product_description:String,product_price:Number,create_date:Date,update_date:Date)=>{
        //const escaped = escapeParams([product_name,category_id,product_description,product_price,create_date,update_date]);
        try {
            let sql = `INSERT INTO ${this.tableName} (product_name,category_id,product_description,product_price,create_date,update_date) 
            VALUES ('${product_name}','${category_id}','${product_description}','${product_price}','${create_date}','${update_date}')`;
            return await mariaDb.query(sql)
        } catch (error) {
            return error;
        }
    }
    delete = async(id:Number)=>{
        let sql =`DELETE FROM ${this.tableName} Where product_id=${id}`;
        return await mariaDb.query(sql);
    }
    update = async(product_id:Number, product_name:String,category_id:Number,product_description:String,product_price:Number,create_date:Date,update_date:Date)=>{
        let sql = ` UPDATE ${this.tableName} 
                    SET product_name = '${product_name}',
                        category_id = '${category_id}',
                        product_description = '${product_description}',
                        product_price = '${product_price}',
                        create_date = '${create_date}',
                        update_date = '${update_date}',
                    WHERE product_id = '${product_id}'`;
        return await mariaDb.query(sql);
    }
}

module.exports = new Product;
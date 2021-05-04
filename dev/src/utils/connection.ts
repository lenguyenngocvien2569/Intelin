import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})
module.exports = db;
// con.connect();
// con.query("SELECT * FROM Products",(err,rows,fields)=>{
//     if(err) throw err;
//     console.log(rows);
// })
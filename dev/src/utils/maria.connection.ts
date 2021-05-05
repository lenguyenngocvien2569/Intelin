import dotenv from 'dotenv';
import mariadb from 'mariadb';
const mariaConfig = require('../configs/maria.config')
dotenv.config();
const mariaDb = mariadb.createPool({
    host: mariaConfig.host,
    user: mariaConfig.user,
    password: mariaConfig.password,
    database: mariaConfig.database
})
module.exports = mariaDb
//module.exports = db;

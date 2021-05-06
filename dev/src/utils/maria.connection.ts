import dotenv from 'dotenv';
import mariadb from 'mariadb';
const mariaConfig = require('../configs/maria.config')
const CONNECTION_ERROR_CODE = require('../helpers/error/error.connection');
dotenv.config();
const mariaDb = mariadb.createPool({
    host: mariaConfig.host,
    user: mariaConfig.user,
    password: mariaConfig.password,
    database: mariaConfig.database
})
const mariaConnection = () => {
    return new Promise((resolve: any, reject: any) => {
        mariaDb.getConnection()
            .then(() => {
                console.log("MariaDB connected !");
                resolve("MariaDB success !");
            })
            .catch(() => { reject(CONNECTION_ERROR_CODE.MARIADB_CONNECTION_ERROR) })
    })
}
module.exports = { mariaDb, mariaConnection };

// export default (host: string, user: string, password: string, database: string) => {
//     const connect = async () => {
//         return new Promise((resolve: any, reject: any) => {
//             const mariaDb = mariadb.createPool({
//                 host: host,
//                 user: user,
//                 password: password,
//                 database: database,
//             })
//             mariaDb.getConnection()
//             .then(() => {
//                 console.log("MariaDB connected !")
//                 resolve("MariaDB success !")
//             }).catch(() => { reject(CONNECTION_ERROR_CODE.MARIADB_CONNECTION_ERROR) })
//         })
//     }
//     connect();
// }


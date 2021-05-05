import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//const mongoConnect = require('./src/utils/mongo.connection');
const mariaDB = require('./src/utils/maria.connection')
import connect from './src/utils/mongo.connection2';

const connectToDB = async()=>{
    await connect('mongodb://localhost:27017/admin');
    // await mariaDB.getConnection().then((result:Object) => {
    //     console.log('MariaDB success !')
    // }).catch((err:Object) => {
    //     console.log('MariaDB fail !')
    // });
    await mariaDB.getConnection()
    const router = require('./src/routers/index');
    app.use('/api',router);
    await app.listen(process.env.PORT,()=>{
        console.log(`Server listen port : ${process.env.PORT}`);
    })
}
connectToDB();

const init = () : Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("abc")
    })
}
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
//const mongoConnection = require('./src/utils/mongo.connection2');
import {Request, Response,NextFunction } from 'express';
const {error_handler} = require('./src/helpers/error_handle')
const connectToDB = async () => {
    try {
        await connect('mongodb://localhost:27017/admin')
        await mariaDB.getConnection().then((result:Object) => {
            console.log('MariaDB success !')
        }).catch((err:Object) => {
            console.log('MariaDB fail !')
        });
        //await mariaDB.getConnection()
        const router = require('./src/routers/index');
        app.use('/api', router);

        await app.listen(process.env.PORT,()=>{
            console.log(`Server listen port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
    
}
connectToDB();
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    error_handler(err, res);
})
const init = () : Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("abc")
    })
}
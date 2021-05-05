import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const mongoConnect = require('./src/utils/mongo.connection');
const mariaDB = require('./src/utils/maria.connection')

const connectToDB = async()=>{
    await mongoConnect.then((result:Object) => {
        console.log(result)
    }).catch((err:Object) => {
        console.log(err)
    });
    await mariaDB.getConnection().then((result:Object) => {
        console.log('MariaDB success !')
    }).catch((err:Object) => {
        console.log('MariaDB fail !')
    });
    
}
connectToDB();

const router = require('./src/routers/index');
app.use('/api',router);
app.listen(process.env.PORT,()=>{
    console.log(`Server listen port : ${process.env.PORT}`);
})
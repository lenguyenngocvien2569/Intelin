import express,{ Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const { error_handler } = require('./src/helpers/error_handle');
const mariaConfig = require('./src/configs/maria.config');
const mongoConfig = require('./src/configs/mongo.config');
const { mariaConnection } = require('./src/utils/maria.connection');
import mongoDBConnection from './src/utils/mongo.connection2';

const connectToDB = async () => {
    try {
        await mongoDBConnection(mongoConfig.url);
        await mariaConnection();
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

const Product = require('./src/controllers/Product/product.class');

app.post('/multipleInsert', (req: Request, res: Response,next:NextFunction) => {
    const tempTime = '021-01-19 03:14:07'
    let listExampleData = [
        { category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime },
        { product_name: 'test2', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime },
        { product_name: 'test3', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime },
        { product_name: 'test4', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime }
    ];
    let listPromise: any = [];
    console.time();
    listExampleData.forEach(element => {
        listPromise.push(
            Product.insert(element.product_name,
                element.category_id,
                element.product_description,
                element.product_price,
                element.create_date,
                element.update_date));
    });
    Promise.all(listPromise).then(reuslt => {
        res.send(reuslt);
    }).catch((error: any) => {
        next(error);
    })
    console.timeEnd();

})
app.post('/syncMultipleInsert', (req: Request, res: Response, next: NextFunction) => {

    const tempTime = '021-01-19 03:14:07'
    let listExampleData = [
        { product_name: 'test1', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime },
        { product_name: 'test2', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime },
        { product_name: 'test3', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime },
        { product_name: 'test4', category_id: 1, product_description: 'test', product_price: 100, create_date: tempTime, update_date: tempTime }
    ];
    let listInserted: any = [];
    console.time()
    listExampleData.forEach(async element => {
        await Product.insert(element.product_name,
            element.category_id,
            element.product_description,
            element.product_price,
            element.create_date,
            element.update_date).then((result:any) => {
                listInserted.push(result);
            }).catch((err:any) => {
                next(err)
            }); 
    });
    res.send(listInserted);
    console.timeEnd()
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    error_handler(err, res);
})
const init = () : Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("abc")
    })
}
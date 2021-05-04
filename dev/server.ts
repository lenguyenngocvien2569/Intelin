import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';


dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const router = require('./src/routers/index');

app.use('/api',router);

app.listen(process.env.PORT,()=>{
    console.log(`Server listen port : ${process.env.PORT}`);
})
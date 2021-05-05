import mongoose from 'mongoose';
const mongoConfig = require('../configs/mongo.config')
const mongoConnect = mongoose.connect(mongoConfig.url,{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result=>{return 'MongoDB connected !'}).catch(error =>{
    return 'MongoDB Error !'
})
module.exports = mongoConnect;
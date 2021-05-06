import mongoose from 'mongoose';
const CONNECTION_ERROR_CODE = require('../helpers/error/error.connection');

export default (url: string) => {
  const connect = async () => {
    return new Promise((resolve: any, reject: any) => {
      mongoose.connect(url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true })
        .then(() => {
          console.log("MongoDB connected !");
          resolve("MongoDB success !");
        })
        .catch(err => {
          reject(CONNECTION_ERROR_CODE.MONGODB_CONNECTION_ERROR)
        })   
    })  
  }
  connect();
  mongoose.connection.on('disconnected', connect);
}

import mongoose from 'mongoose';

export default (url: string) => {
  const connect = async () => {
    return await mongoose.connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true })
      // .then(() => {
      //   return console.log(`MongoDB success !`);
      // })
      // .catch(err => {
      //   console.log(`MongoDB Error !`);
      // })    
  }
  connect();
  mongoose.connection.on('disconnected', connect);
}


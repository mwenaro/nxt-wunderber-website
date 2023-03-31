import mongoose from 'mongoose';
const MONGO_DB_URI= `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PWD}@cluster0.2f29nts.mongodb.net/wunderber_db?retryWrites=true&w=majority`


export const mongoDB = async () => {
  return mongoose.connect(MONGO_DB_URI);
  /*,{
    /*useNewUrlParser: true,
    
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    
  });*/
};

export default mongoDB ;


 

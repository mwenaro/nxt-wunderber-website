import mongoose from 'mongoose';
const MONGO_DB_URI= `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PWD}@cluster0.2f29nts.mongodb.net/wunderber_db/?retryWrites=true&w=majority`
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URI, {
    
        // useUnifiedTopology:true,
        // useNewUrlParser:true,
        // useCreateIndex:true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err:any) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.NEXT_PUBLIC_EXT_MONGO_DB_URI1 as string, {
    
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

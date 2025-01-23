import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}=${process.env.DATABASE_NAME}`);
        console.log("DB CONNECTED");
        console.log("Connected to: ", connectionInstance.connection.host);
    } catch (error) {
        console.log('ERROR WHILE DB CONNECTION');
        console.log(error.message);
        process.exit(1);
        
    }
    }

export default connectDB;
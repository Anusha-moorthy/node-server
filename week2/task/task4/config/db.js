import mongoose from "mongoose";

const connectDB = async()=>{

    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log('Successfully Connected', conn.connection.host);
}

export default connectDB
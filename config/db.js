import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
        console.log(process.env.MONGODB_URI,"connect")
        const conn=await mongoose.connect(process.env.MONGODB_URI,{
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })
        // console.log(`mogodb connected:${conn.connection.host}`);
    }catch(error){
        console.log(`Error:${error.message}`);
        process.exit(1)
    }
}

export default connectDB;
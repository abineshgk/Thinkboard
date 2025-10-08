import mongoose from "mongoose";

export const connectDB =async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("CONNECTED TO DB SUCCESSFULLY");
        
    } catch (error) {
        console.error("DB is detaching some error",error);
        process.exit(1);
        
        
    }
} 
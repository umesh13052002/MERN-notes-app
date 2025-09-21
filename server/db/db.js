import mongoose from "mongoose";
export const connectToMongoDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://umeshdev:Sumit123@cluster0.gdo68.mongodb.net/notesapp");
        console.log("Connected to MongoDB");
    } catch(error){
        console.error("Error connecting to MongoDB:",error);
    }
}
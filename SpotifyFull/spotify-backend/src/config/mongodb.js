import mongoose from "mongoose";

const connectDB = async()=>{
    mongoose.connection.on('connected',()=>{
        console.log('Connection established');
    })

    await mongoose.connect(`${process.env.MONGO_URL}/spotify`)
   
    // await mongoose.connect('mongodb+srv://alihassan:12345678900@cluster0.z7apctj.mongodb.net/spotify')
}


export default connectDB
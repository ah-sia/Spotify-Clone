import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Connection established.");
    }) // whenever the connection status is 'connected, the function will be executed

    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`)
}

export default connectDB;
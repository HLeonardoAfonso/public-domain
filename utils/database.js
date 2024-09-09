import mongoose from "mongoose";

let isConnected = false;

const connectToMango = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "public_domain_movies",
        })
        isConnected = true;
        console.log('MongoDB conneced');
    } catch (error) {
        console.log(error);
    }
};

export default connectToMango;

// let isConnected = false;

// export const connectToMango = async () => {
//     mongoose.set('strictQuery', true);

//     if(isConnected) {
//         console.log('MongoDB is already connected');
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: "public_domain_movies",
//         })

//         isConnected = true;

//         console.log('MongoDB conneced')
//     } catch (error) {
//         console.log(error);
//     }

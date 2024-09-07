import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> { // void means we dont bother about the return type, or what we are getting back
    if(connection.isConnected){
        console.log("Using existing connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI || '' , {});
        connection.isConnected = mongoose.connections[0].readyState;
        console.log("New connection created");
    }
    catch(error) {
        console.log('Error connecting to database: ', error);
        process.exit(1);
    }
}

export default dbConnect;
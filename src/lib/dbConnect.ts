import mongoose  from "mongoose";
// import { log } from "node:console";

type ConnectionObject = {
    isConnected? : number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("Already Connected to Database.");
        return 
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("Database is Connected Successfully.");
    } catch (error) {
        console.log("Databse Connection Failed",error);
        process.exit(1)
    }
}

export default dbConnect;
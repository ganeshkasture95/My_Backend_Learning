import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDDB = async ()=>{

    try{
        const connectionInstance2 =await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        console.log(`"MongoDb connected sucessfully" ${connectionInstance2.connection.host}`)

    }catch(error){
        console.log(`Error in MOngo Db Connection ${error}`)
        process.exit(1)
    }
}


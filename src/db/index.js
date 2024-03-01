import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';


const conectDB = async ()=>{
    try{
        // awate is used because the data base is stored in another continent 
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        // mongoes connection tackes two parameters databae source and databae name
        console.log(`MongoDB Connected Sucessfuly for the first time!! DB:HOST: ${connectionInstance.connection.host}`)

    }catch (error){
        console.log(`MongoDB connection failed ${error}`)
        process.exit(1)
    }
    
}

export default conectDB;


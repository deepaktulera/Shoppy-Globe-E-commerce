import mongoose from 'mongoose'

const connectDatabase = async () => {
    try{
        const connect = await mongoose.connect(process.env.Mongo_Url)
        console.log("Mongodb database connected");
    }catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDatabase
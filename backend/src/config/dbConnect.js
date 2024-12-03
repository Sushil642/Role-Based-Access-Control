const mongoose=require('mongoose');
const dotenv=require('dotenv').config();


const dbConnect= async ()=>{
    try{
        const connect= await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected to MongoDB: ${connect.connection.host}`);
    }
    catch(err){
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports=dbConnect;

const express=require("express");
const dotenv=require("dotenv").config();
const dbConnect=require("./config/dbConnect");
const authRoutes=require("./routes/authRoutes");
const userRoutes=require("./routes/userRoutes");
const cors=require('cors');
dbConnect();

const app=express();
const PORT=process.env.PORT || 7001;
app.use(cors());

//Middlewares
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on ${PORT}`);
})
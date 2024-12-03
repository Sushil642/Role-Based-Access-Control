const express=require('express');
const user=require('../models/userModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const register= async (req,res)=>{
    try{
   const {username, password,role}=req.body;
   const hashedpassword=await bcrypt.hash(password,10);

   const newUser=new user({username,password:hashedpassword,role});
   await newUser.save();
   res
   .status(201)
   .json({message:`User registered with name ${username}`});
    }catch(err)
    {
        res
        .status(404)
        .json({message:`Error in creating User ${err}`});
    }
}

const login= async (req,res)=>{
    try{
        const {username,password}=req.body;
const usr= await user.findOne({username});
if(!usr)
{
   return res.status(404).json({message:`Invalid creditionals !`});
}
console.log(usr);
console.log(usr.password);
    const isMatch=await bcrypt.compare(password,usr.password);
    console.log(isMatch);
    if(!isMatch)
    {
      return  res.status(400).json({message:`Password Incorrect !`});
    }

    const token= jwt.sign({id:usr._id,role:usr.role},process.env.JWT_SECRET,{expiresIn:"1h"});
   return res.status(201).json({token:token,role:usr.role});

}catch(err)
    {
        res.status(404).json({message:`Something Went Wrong! ${err}`});
    }

}

module.exports={register,login}
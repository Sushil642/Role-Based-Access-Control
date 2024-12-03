const jwt=require("jsonwebtoken");
const dotenv=require('dotenv').config();
const verifyToken=(req,res,next)=>{

    let token;
    let authHeader=req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer"))
    {
        // console.log(authHeader);
        token=authHeader.split(" ")[1];
        
        if(!token)
        {
         return  res.status(401).json({message:`No token, authorization failed !`});
        }
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decode;
            console.log(`The decode user is : `,req.user);
            next();
        }catch(err)
        {
         return  res.status(401).json({message:`Token is not valid!`});

        }
    }
};

module.exports=verifyToken;
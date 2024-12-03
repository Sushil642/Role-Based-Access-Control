const express=require('express');
const verifyToken =require("../middlewares/authMiddleware");
const authoriseRoles=require("../middlewares/roleMiddlewares");
const user=require("../models/userModel");
const route=express.Router();

//only  admin can access this route
route.get("/admin",verifyToken,authoriseRoles("admin"),async(req,res)=>
{
  const managers = await user.find({ role: "admin" }); // Assuming User model
  res.status(200).json(managers);
});

//only  manager can access this route
route.get("/manager",verifyToken,authoriseRoles("admin","manager"),async (req,res)=>
    {
      const managers = await user.find({ role: "manager" }); // Assuming User model
      res.status(200).json(managers);
    });
//only  user can access this route
route.get("/user",verifyToken,authoriseRoles("admin","manager","user"),async (req,res)=>
    {
      const managers = await user.find({ role: "user" }); // Assuming User model
      res.status(200).json(managers);
    });


route.delete('/:userId', verifyToken, authoriseRoles('admin'), async (req, res) => {
      try {
        const { userId } = req.params; // Capture the userId from the URL parameters
    
        // Find and delete the user by userId
        const deletedUser = await user.findByIdAndDelete(userId);
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json({ message: `User with ID ${userId} deleted successfully` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting user 1' });
      }
    });
module.exports=route;
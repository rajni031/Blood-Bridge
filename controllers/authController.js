const userModels = require("../models/userModels");
const bcrypt =require('bcryptjs')
const jwt = require("jsonwebtoken");

const registerController=async(req,res)=>{
    try{
       const existingUser = await  userModels.findOne({email:req.body.email})
       //validation
       if(existingUser)
       {
        return res.status(200).send({
            success:false,
            message:'User Already Exists'
        })
       }
       const salt=await bcrypt.genSalt(10)
       const hashedpassword= await bcrypt.hash(req.body.password,salt)
       req.body.password=hashedpassword
       //rest data 
       const user = new userModels(req.body)
       await user.save()
       return res.status(201).send({
        success:true,
        message:"User Registred successfully",
        user
       })
    }catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Register Api',
            error
        })
    }
};
//login call back
const loginController = async (req, res) => {
    try {
      const user = await userModels.findOne({ email: req.body.email });
      console.log(user)
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Invalid Credentials",
        });
      }
      
      //check role
      if (user.role != req.body.role) {
         console.log(user.role) //role is nesscesssary to provide.
        return res.status(500).send({
          success: false,
          message: "role dosent match",
        });
      }
      //compare password
      const comparePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!comparePassword) {
        return res.status(500).send({
          success: false,
          message: "Invalid  Credentials",
        });
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d", // 1 day session.
      });
      return res.status(200).send({
        success: true,
        message: "Login Successfully",
        token,
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error In Login API",
        error
      });
    }
  };
//GET CURRENT USER
const currentUserController = async (req, res) => {
  try {
    const user = await userModels.findOne({ _id: req.body.userId });
    return res.status(200).send({
      success: true,
      message: "User Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "unable to get current user",
      error,
    });
  }
  
};

module.exports={registerController,loginController,currentUserController}
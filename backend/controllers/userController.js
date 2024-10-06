import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if(!name || !email || !password){
        res.json({success:false, message:"Please Provide Missing Details"})
    }
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"Please Provide a Valid Email"})
    }
    if(password.length < 8){
        return res.json({success:false, message:"Your password must contain minumum 8 characters"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userData = {
        name,
        email,
        password:hashedPassword,
    }
    const newUser = new userModel(userData)
    const user = await newUser.save()
    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
    res.json({success:true,token})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { registerUser }
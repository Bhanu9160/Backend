import User from "../models/User.js";
import jwt from "jsonwebtoken";
//generate jwt 
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresin:"30d", 
    });
};
//register 
export const registerUser = async (req,res)=>{
    try{
        const{name,email,password}= req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"user already exists"});

        }
        const user = await User.create({
             name,
             email,
             password, 
        });
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        });
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
//login
export const loginUser = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const user = await User.findOne({email});
        if (user && (await 
            user.matchPassword(password))){
                res.json({
                    _id:user._id,
                    name:user.name,
                    emai:user.email,
                    token:generateToken(user._id),
                });
            }else{
                res.status(401).json({message:"invalid email or password"});

            }
    
    }catch(error){
        res.status(500).json({message:error.message});
    }
};
//get profile protected 
export const getProfile = async (req,res)=>{
    res.json(req.user);
};

import jwt from "jsonwebtoken";
import { CustomError } from "../../utils/customError.js";
import { UserModel } from "../../models/user.model.js";
import {RefreshTokenModel} from '../../models/refreshToken.model.js';
import { Types } from "mongoose";
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let err;
    if (!email) {
      err = new CustomError(400, 'Bad Request', {
        email: ['The Email not provide']
      });
      return next(err);
    }
    if (!password) {
      err = new CustomError(400, 'Bad Request', {
        password: ['The Paaword not provide']
      });
      return next(err);
    }
    const user = await UserModel.findOne({ email: email }).select('+password');
    if (!user) {
      err = new CustomError(404, 'Not found', {
        email: ['The User not exits']
      });
      return next(err);
    }
    const isPasswordMatch = await user.comparePasswordInDB(password, user.password);
    if (!isPasswordMatch) {
      err = new CustomError(401, 'Unauthorized', {
        password: ['Invalid credentials']
      });
      return next(err);
    }
    const token=await generateToken(user)
    res.status(202).json({
      data:token,
      message: "LoggedIn",
      errors: {}
    })
  } catch (error) {
    return next(error)//this will call the globle error handler and pass error object to err argument
  }
}
const generateToken=async (user)=>{
  const refreshToken=await RefreshTokenModel.create({user:user._id});
  const payload={
    sub:user._id,
    name:user.name,
  }
  // const token=jwt.sign(password,process.env.SECRET_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});

  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
  // const token=jwt.sign({payload},process.env.SECRET_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
  //sing() will take two argument 1.payload,2.secrect key,3.expireIn(Optional) it will automaticlly add on payload
return  {
    token:token,
    expiresIn:Number(process.env.ACCESS_TOKEN_EXPIRY),
    tokenType: 'bearer',
    isOwner:user.isOwner?true:false,
    refreshToken:refreshToken.code,
  };
}
const userExits=async (id)=>{
  return await UserModel.findById(id);
}
const removeRefreshToken=async (code)=>{
return await RefreshTokenModel.findOneAndDelete({code:code});
}
export const refreshToken=async (req,res,next)=>{
  try{
    const {token}=req.body;
    let err;
    //check refreshToken exits
    const isRefreshTokenExits=await RefreshTokenModel.findOne({code:token});
    if(!isRefreshTokenExits){
      err=new CustomError(401,'Unauthorized',{
        token:['Invalid token']
      })
      return next(err);
    }
    const isUserExits=await userExits(isRefreshTokenExits.user);
    if(!isUserExits){
      err=new CustomError(401,'Unauthorized',{
        token:['User not exits']
      })
      return next(err);
    }
    const newToken=await generateToken(isUserExits);
    if(newToken){
      //remove the exiting refresh token
      await removeRefreshToken(token);
      res.status(202).json({
        data:newToken,
        message: "LoggedIn",
        errors: {}
      })
    }else{
      err=new CustomError(401,'Unauthorized',{
        token:['some thing went wrong']
      })
      return next(err);
    }

  }catch(error){
    return next(error)
  }
}
export const revokeRefreshToken=async (req,res,next)=>{
  try{
    const {token}=req.body;
    let err=null;
    const removeToken= await removeRefreshToken(token);
    console.log(removeToken,"removetoken")
    if(!removeToken){
      err=new CustomError(404,"Not found",{
        token:['Token not found']
      })
      return next(err);
    }
    res.status(202).json({
      data:null,
      message:'Succefully token remove',
      errors:{}
    })
  }catch(error){
    return next(error);
  }
}
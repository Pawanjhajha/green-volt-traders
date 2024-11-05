
import jwt from "jsonwebtoken";
export const login=async(req,res,next)=>{
try{
    const{email,password}=req;
    if(!email || !password){
        throw new Error('')
    }
    const token=jwt.sign()
}catch(error){
  next(error)//this will call the globle error handler and pass error object to err argument
}
}
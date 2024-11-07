
import jwt from "jsonwebtoken";
import { CutomeError } from "../../utils/customeError";
export const login=async(req,res,next)=>{
try{
    const{email,password}=req;
    if(!email){
       const err= new CutomeError(400,'Bad Request',{
        email:['The Email not provide']
       });
    }
    if(!password){
      const err= new CutomeError(400,'Bad Request',{
        password:['The Paaword not provide']
      });
   }
    const token=jwt.sign()
}catch(error){
  next(error)//this will call the globle error handler and pass error object to err argument
}
}
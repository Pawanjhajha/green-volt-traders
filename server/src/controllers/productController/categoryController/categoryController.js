import { CategoryModel } from "../../../models/productCategory.model.js";
import { CustomError } from "../../../utils/customError.js";

export const createCategory=async (req,res,next)=>{
    try{
        const {name}=req.body;
        let err;
        if(!name){
            err=new CustomError(400,'Bad Request',{
                name:['Category name is required']
            })
            return next(err);
        }
        const isCategoryExits=await findCategory(name);
        if(isCategoryExits){
            err=new CustomError(409,"Already Exists",{
                name:['Category name already Exits']
            })
            return next(err);
        }
        const create=await CategoryModel.create({name:name});
            res.status(201).json({
                data:create,
                message:'Successfully Created',
                errors:{}
            })

    }catch(error){
        return next(error);
    }
}
const findCategory=async (name)=>{
    return await CategoryModel.findOne({name:name});
}
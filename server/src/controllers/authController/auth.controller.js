
import jwt from "jsonwebtoken";
import { CustomError } from "../../utils/customError.js";
import { UserModel } from "../../models/user.model.js";
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let err;
    // console.log(req,"email")
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
    console.log(user,"user")
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
    const payload={
      sub:user._id,
      name:user.name,
    }
    console.log(process.env.ACCESS_TOKEN_EXPIRY,"acees")
    // const token=jwt.sign(password,process.env.SECRET_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
    console.log(token,"token")
    // const token=jwt.sign({payload},process.env.SECRET_KEY,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
    //sing() will take two argument 1.payload,2.secrect key,3.expireIn(Optional) it will automaticlly add on payload
    res.status(202).json({
      data:{
        token:token,
        expiresIn:Number(process.env.ACCESS_TOKEN_EXPIRY),
        tokenType: 'bearer',
      },
      message: "LoggedIn",
      errors: {}
    })
  } catch (error) {
    console.log(error, "error...")
    return next(error)//this will call the globle error handler and pass error object to err argument
  }
}
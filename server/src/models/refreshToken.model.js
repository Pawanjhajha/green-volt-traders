import mongoose, { Types } from "mongoose";
import crypto from 'crypto';

const refreshTokenSchema= new mongoose.Schema({
    user:{
        type:Types.ObjectId,
        required:true,
         ref: 'core_users'
    },
    code:{
        type:String,
    },
    isRevoked:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        expires:process.env.REFRESH_TOKEN_EXPIRY || 604800
    }

},{timestamps:true,versionKey: false,})
refreshTokenSchema.index({code:1},{unique:true});
refreshTokenSchema.pre("save",async function(next){
this.code=crypto.randomBytes(32).toString('hex');
next();
})
export const RefreshTokenModel=mongoose.model('core_auth_refresh_tokens',refreshTokenSchema);

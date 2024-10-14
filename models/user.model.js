import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema= new mongoose.Schema({
    // fristName:{
    //     type:String,
    //     required: [true,"The FirstName is required"],
    // },
    // lastName:{
    //     type:String,
    //     required:false
    // },

    email:{
        type:String,
        unique: true,
        required:[true,"The Email is required"],
        lowareCase:true,//it is validatore if user give value in upper case then it will convert into lowerCase
        validate:{
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    password:{
        type:String,
    },

    isOwner:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true,
    }
})

userSchema.pre("save", async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.pre(['updateOne', 'findOneAndUpdate'], async function(next) {
    const update = this.getUpdate(); 
    console.log(update.$set.password,"pudate")
    if (update.$set && update.$set.password) { 
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(update.$set.password, salt);
            update.$set.password = hashedPassword; 
        } catch (error) {
            return next(error); 
        }
    }
    next(); 
});

export const UserModel = mongoose.model('users', userSchema);



import express from 'express';
import dotEnv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routers/userRouter.js';
import authRouter from './routers/authRouter.js'
import { globalErrorHandler } from './controllers/globalErrorController.js';


dotEnv.config()
const app=express();
// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());//it will parse the json bodies and enbale json to express

app.get('/',(req,res)=>{
    console.log("welcome to exporess server");
    res.send('"dfjkdsjfldsjflkdsf')
})
const prefix=process.env.PREFIX;
console.log(prefix)
app.use(`${prefix}/users`,userRouter)
app.use(`${prefix}/auth`,authRouter)

//add the global error handler
app.use(globalErrorHandler)
app.listen(process.env.PORT,()=>{
    console.log(`server is runnin on port:${process.env.PORT}`)
})


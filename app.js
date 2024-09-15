import express from 'express';
import dotEnv from 'dotenv';

dotEnv.config()
const app=express();


app.listen(process.env.PORT,()=>{
    console.log(`server is runnin on port:${process.env.PORT}`)
})


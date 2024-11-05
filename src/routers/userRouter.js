import express from 'express';
import { GetUser } from '../controllers/user.controller.js';

const router=express.Router();//it will create the router

router.route('/').get(GetUser);

export default router;

import express from 'express';
import { login, refreshToken, revokeRefreshToken } from '../controllers/authController/auth.controller.js';

const  router=express.Router()
router.route('/').post(login);
router.route('/token').post(refreshToken)
router.route('/revoke').post(revokeRefreshToken)
export default router;
import express from 'express';
import { createCategory } from '../controllers/productController/categoryController/categoryController.js';

const router=express.Router();

router.route('/category').post(createCategory)

export default router;
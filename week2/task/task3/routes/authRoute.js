import express from 'express';
import { createStudent } from '../controllers/authController.js';

const route = express.Router()

route.post('/student',createStudent)

export default route
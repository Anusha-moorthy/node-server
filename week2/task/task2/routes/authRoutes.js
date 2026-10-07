import express from 'express';
import { createStudent, getStudent } from '../controllers/authController.js';

const route = express.Router()

route.post('/addstudent', createStudent)
route.get('/student', getStudent)

export default route
import express from 'express'
import { getData } from '../controllers/authController.js'

const route = express.Router()

route.get('/welcome',getData)

export default route
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/authRoute.js'
import connectDB from './config/db.js';

dotenv.config();

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use('/api', authRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{

    console.log(`Successfully Connected http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/product
//http://localhost:5000/api/products
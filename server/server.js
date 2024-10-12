import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js'
import userRoutes from './routes/user.routes.js'
const app = express();
const port = 8000;
app.use(express.json())
app.use('/api', userRoutes)
dotenv.config()
const PORT = process.env.PORT | 8000

dbConnect()


app.listen(port, () => console.log(`App listening on port: ${port}`));
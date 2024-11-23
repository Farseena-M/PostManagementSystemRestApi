import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRouter from './src/routes/postRouter.js';
import authRouter from './src/routes/authRouter.js';
const app = express()

app.use(bodyParser.json());
app.use(express.json())
app.use(cors({
    origin: 'post-management-system-web.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use('/posts', postRouter, authRouter)

export default app;
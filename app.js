import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRouter from './src/routes/postRouter.js';
import authRouter from './src/routes/authRouter.js';
const app = express()

app.use(bodyParser.json());
app.use(express.json())
const corsOptions = {
    origin: 'https://post-management-system-web.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use('/posts', postRouter, authRouter)

export default app;
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRouter from './src/routes/postRouter.js';
const app= express()

app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.use('/posts',postRouter)

export default app;
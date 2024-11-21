import express from 'express';
import bodyParser from 'body-parser';
import postRouter from './src/routes/postRouter.js';
const app= express()

app.use(bodyParser.json());
app.use(express.json())

app.use('/posts',postRouter)

export default app
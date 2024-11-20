import express from 'express'
import postRouter from './src/routes/postRouter.js'
const app= express()
app.use(express.json())

app.use('/posts',postRouter)

export default app
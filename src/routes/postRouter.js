import express from 'express';
import { createPosts, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/postController.js';
import multipleImage from '../middlewares/multipleImage.js';
const postRouter = express.Router()

postRouter.post('/create',multipleImage,createPosts)
postRouter.get('/all-posts',getAllPosts)
postRouter.get('/fetch/:id',getPostById)
postRouter.patch('/:id',multipleImage,updatePost)
postRouter.delete('/:id',deletePost)

export default postRouter;
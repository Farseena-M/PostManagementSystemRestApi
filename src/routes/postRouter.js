import express from 'express';
import { createPosts, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/postController.js';
import multipleImage from '../middlewares/multipleImage.js';
import verifyToken from '../middlewares/verifyToken.js';
const postRouter = express.Router()

postRouter.post('/create', multipleImage, verifyToken, createPosts)
postRouter.get('/all-posts', verifyToken, getAllPosts)
postRouter.get('/fetch/:id', verifyToken, getPostById)
postRouter.patch('/:id', verifyToken, multipleImage, updatePost)
postRouter.delete('/:id', verifyToken, deletePost)

export default postRouter;
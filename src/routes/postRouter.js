import express from 'express';
import { createPosts } from '../controllers/postController.js';
import singleImage from '../middlewares/multipleImage.js';
const postRouter = express.Router()

postRouter.post('/create',singleImage,createPosts)

export default postRouter;
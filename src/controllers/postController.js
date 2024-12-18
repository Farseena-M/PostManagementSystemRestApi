import postSchema from "../models/postSchema.js";
import { v2 as cloudinary } from 'cloudinary';


export const createPosts = async (req, res) => {
    try {
        const { title, description } = req.body;

        const images = req.body.images;

        const newPost = new postSchema({
            title,
            description,
            images: images,
        });

        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
};



export const getAllPosts = async (req, res) => {
    try {
        const posts = await postSchema.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching all the post.' });
    }
};



export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await postSchema.findById(id);

        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the post.' });
    }
};



export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, images } = req.body;

        const updatedPost = await postSchema.findByIdAndUpdate(
            id,
            { title, description, images },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating the post.' });
    }
};





export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        await postSchema.findByIdAndDelete(id);
        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the post.' });
    }
};

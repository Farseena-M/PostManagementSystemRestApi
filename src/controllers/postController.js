import postSchema from "../models/postSchema.js";


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

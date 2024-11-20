

export const createPosts = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        const imageUrl = req.file;
        const newPost = new Post({ title, description, imageUrl });
        await newPost.save();
        res.status(201).json(newPost);  
    } catch (error) {
        res.status(500).json({ error: 'jjjj' });
    }
}
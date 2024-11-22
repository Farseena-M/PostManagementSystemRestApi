import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';


const verifyToken = async (req, res, next) => {
    const authToken = req.headers['authorization'];
    let token;

    if (authToken && authToken.startsWith('Bearer')) {
        token = authToken.split(' ')[1];
    } else {
        return res.status(401).json({ message: 'You are not logged in' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded.id
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

export default verifyToken;

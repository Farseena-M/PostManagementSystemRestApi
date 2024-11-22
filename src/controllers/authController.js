import User from "../models/userSchema.js";
import generateToken from "../utils/generateToken.js";


export const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const Exist = await User.findOne({ email })
        if (Exist) {
            return res.status(409).json({
                error: 'User already exists'
            })
        }
        const newUser = new User({
            username,
            email,
            password,
        })
        
        await newUser.save()
        return res.status(201).json({
            status: 'Success',
            data: newUser
        })        
        
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            message: "Something went wrong...!",
            error: error.message
        })
    }
};



export const Login = async (req, res) => {
    const { email, password } = req.body
    if (!email && !password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const findUser = await User.findOne({ email }).select('+password')
    if (!findUser || !(await findUser.comparePasswordInDb(password, findUser.password))) {
        return res.status(404).json({ message: 'Incorrect email or password' })
    }

    const token = generateToken(findUser._id)

    return res.status(200).json({
        message: 'Success',
        token,
        findUser
    })
};
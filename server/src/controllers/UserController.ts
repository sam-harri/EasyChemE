// controllers/UserController.ts
import { Request, Response } from 'express';
import User from '../db/models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response)=> {
    try {
        const { username, email, password } = req.body;

        // Check if the username or email already exists
        const existingUser = await User.findOne({
            $or: [{ username: username }, { email: email }],
        });

        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(400).json({ error: 'Username already exists' });
            }
            if (existingUser.email === email) {
                return res.status(400).json({ error: 'Email already exists' });
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET as string,
            { expiresIn: '1d' }
        );

        res.status(200).json({ message: 'User logged in successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user', error });
    }
};



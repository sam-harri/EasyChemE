// controllers/UserController.ts
import { Request, Response } from 'express';
import User from '../db/models/User';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const createUser = async (req: Request, res: Response) => {
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

        const newUser = new User({
            username,
            email,
            password,
        });

        const createdUser = await newUser.save();
        res.status(201).json(createdUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const { identifier, password } = req.body;

    try {
        // Find user with either matching username or email
        const user = await User.findOne({
            $or: [{ username: identifier }, { email: identifier }],
        });

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

        // Remove the password from the user object
        const userWithoutPassword = {
            _id: user._id,
            username: user.username,
            email: user.email,
            // Add any other properties of the user object you want to include
        };

        res.status(200).json({
            message: 'User logged in successfully',
            token,
            user: userWithoutPassword,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user', error });
    }
};







// app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { connectDB } from './db/connectDB';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();
console.log('MONGODB_URI:', process.env.MONGODB_URI);
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

// Use the error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
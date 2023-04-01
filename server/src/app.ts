// app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/connectDB';
import { errorHandler } from './middleware/errorHandler';

import userRoutes from './routes/userRoutes';
import questionRoutes from './routes/questionRoutes';
import userProgressRoutes from './routes/userProgressRoutes'

import { insertData } from './db/addingData';

dotenv.config();
connectDB();
// insertData();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/userProgress', userProgressRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


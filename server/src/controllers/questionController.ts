import { Request, Response } from 'express';
import Question from '../db/models/Question';

export const getQuestions = async (req: Request, res: Response) => {
    const { courseCode, courseModule } = req.query;

    try {
        const questions = await Question.find({
            classCode: courseCode as string,
            module: courseModule as string,
        });
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching questions', error });
    }
};

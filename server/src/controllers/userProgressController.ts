import { Request, Response } from 'express';
import UserProgress, { IUserProgress } from '../db/models/UserProgress';

export const enrollInCourse = async (req: Request, res: Response) => {
    try {
        const { userId, courseId } = req.body;

        // Validate inputs
        if (!userId || !courseId) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });

        if (!userProgress) {
            return res.status(404).json({ message: 'User progress not found' });
        }

        if (!userProgress.enrolledCourses.includes(courseId)) {
            userProgress.enrolledCourses.push(courseId);
        }

        await userProgress.save();
        res.status(200).json({ message: 'User enrolled in course successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error enrolling user in course', error });
    }
};

export const unenrollFromCourse = async (req: Request, res: Response) => {
    try {
        const { userId, courseId } = req.body;

        // Validate inputs
        if (!userId || !courseId) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });

        if (!userProgress) {
            return res.status(404).json({ message: 'User progress not found' });
        }

        const index = userProgress.enrolledCourses.indexOf(courseId);
        if (index !== -1) {
            userProgress.enrolledCourses.splice(index, 1);
        }

        await userProgress.save();
        res.status(200).json({ message: 'User unenrolled from course successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error unenrolling user from course', error });
    }
};

export const bookmarkQuestion = async (req: Request, res: Response) => {
    try {
        const { userId, courseId, questionId } = req.body;
        if (!userId || !courseId || !questionId) {
            console.log('invalide input?')
            return res.status(400).json({ message: 'Invalid input' });
        }
        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });
        if (!userProgress) {
            console.log('no user that matches fr')
            return res.status(404).json({ message: 'User progress not found' });
        }
        const targetArray = userProgress.bookmarkedQuestions[courseId];
        if (targetArray && targetArray.includes(questionId)) {
            return res.status(400).json({ message: 'Question already bookmarked' });
        }
        if (targetArray) {
            targetArray.push(questionId);
            userProgress.bookmarkedQuestions[courseId] = targetArray;
        } else {
            userProgress.bookmarkedQuestions[courseId] = [questionId];
        }
        userProgress.markModified('bookmarkedQuestions');
        await userProgress.save();
        res.status(200).json({ message: 'Question bookmarked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error bookmarking question', error });
    }
};


export const unbookmarkQuestion = async (req: Request, res: Response) => {
    try {
        const { userId, courseId, questionId } = req.body;
        if (!userId || !courseId || !questionId) {
            return res.status(400).json({ message: 'Invalid input' });
        }
        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });
        if (!userProgress) {
            return res.status(404).json({ message: 'User progress not found' });
        }
        const targetArray = userProgress.bookmarkedQuestions[courseId];
        if (targetArray) {
            const index = targetArray.indexOf(questionId);
            if (index !== -1) {
                targetArray.splice(index, 1);
            }
        }
        userProgress.markModified('bookmarkedQuestions');
        await userProgress.save();
        res.status(200).json({ message: 'Question unbookmarked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error unbookmarking question', error });
    }
};

export const completeQuestion = async (req: Request, res: Response) => {
    try {
        const { userId, courseId, questionId } = req.body;

        // Validate inputs
        if (!userId || !courseId || !questionId) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });

        if (!userProgress) {
            return res.status(404).json({ message: 'User progress not found' });
        }

        const targetArray = userProgress.completedQuestions[courseId];

        if (targetArray) {
            targetArray.push(questionId);
        } else {
            userProgress.completedQuestions[courseId] = [questionId];
        }

        await userProgress.save();
        res.status(200).json({ message: 'Question completed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error completing question', error });
    }
};

export const removeCompletedQuestion = async (req: Request, res: Response) => {
    try {
        const { userId, courseId, questionId } = req.body;

        // Validate inputs
        if (!userId || !courseId || !questionId) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });

        if (!userProgress) {
            return res.status(404).json({ message: 'User progress not found' });
        }

        const targetArray = userProgress.completedQuestions[courseId];

        if (targetArray) {
            const index = targetArray.indexOf(questionId);
            if (index !== -1) {
                targetArray.splice(index, 1);
            }
        }

        await userProgress.save();
        res.status(200).json({ message: 'Completed question removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing completed question', error });
    }
};

export const getUserBookmarks = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: 'Invalid input' });
        }

        const userProgress: IUserProgress | null = await UserProgress.findOne({ userId });

        if (!userProgress) {
            return res.status(404).json({ message: 'User progress not found' });
        }

        res.status(200).json({ bookmarkedQuestions: userProgress.bookmarkedQuestions });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user bookmarks', error });
    }
};




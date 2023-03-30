// routes/userActivityRoutes.ts
import { Router } from 'express';
import { toggleBookmarkedQuestion, toggleCompletedQuestion, toggleEnrolledClass } from '../controllers/userActivityController';

const router = Router();

router.patch('/toggleBookmarkedQuestion/:userId/:questionId', async (req, res) => {
    try {
        await toggleBookmarkedQuestion(req.params.userId, req.params.questionId);
        res.status(200).send('Bookmarked question updated successfully');
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

router.patch('/toggleCompletedQuestion/:userId/:questionId', async (req, res) => {
    try {
        await toggleCompletedQuestion(req.params.userId, req.params.questionId);
        res.status(200).send('Completed question updated successfully');
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

router.patch('/toggleEnrolledClass/:userId/:courseId', async (req, res) => {
    try {
        await toggleEnrolledClass(req.params.userId, req.params.courseId);
        res.status(200).send('Enrolled class updated successfully');
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
});

export default router;

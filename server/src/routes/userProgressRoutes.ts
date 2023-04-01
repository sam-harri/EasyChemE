import express from 'express';
import { enrollInCourse, unenrollFromCourse, bookmarkQuestion, unbookmarkQuestion, completeQuestion, removeCompletedQuestion, getUserBookmarks } from '../controllers/userProgressController';

const router = express.Router();

router.patch('/enrollInCourse', enrollInCourse);
router.patch('/unenrollFromCourse', unenrollFromCourse);
router.patch('/bookmarkQuestion', bookmarkQuestion);
router.patch('/unbookmarkQuestion', unbookmarkQuestion);
router.patch('/completeQuestion', completeQuestion);
router.patch('/removeCompletedQuestion', removeCompletedQuestion);
router.get('/getUserBookmarks', getUserBookmarks);

export default router;


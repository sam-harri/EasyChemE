import express from 'express';
import {  getEnrolledClassesWithStats, getAllBookmarked , getUserEnrolled, enrollInCourse, unenrollInCourse, bookmarkQuestion, unbookmarkQuestion, completeQuestion, removeCompletedQuestion, getUserBookmarks, getUserCompleted } from '../controllers/userProgressController';

const router = express.Router();

router.patch('/enrollInCourse', enrollInCourse);
router.patch('/unenrollInCourse', unenrollInCourse);
router.patch('/bookmarkQuestion', bookmarkQuestion);
router.patch('/unbookmarkQuestion', unbookmarkQuestion);
router.patch('/completeQuestion', completeQuestion);
router.patch('/removeCompletedQuestion', removeCompletedQuestion);
router.get('/getUserBookmarks', getUserBookmarks);
router.get('/getUserCompleted', getUserCompleted);
router.get('/getUserEnrolled', getUserEnrolled);
router.get('/getAllBookmarked', getAllBookmarked)
router.get('/getEnrolledClassesWithStats', getEnrolledClassesWithStats)

export default router;


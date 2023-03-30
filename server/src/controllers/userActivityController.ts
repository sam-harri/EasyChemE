import mongoose from 'mongoose';
import { ObjectId } from 'bson';
import UserActivity from '../db/models/UserActivity';

// Add or remove a bookmarked question
export const toggleBookmarkedQuestion = async (userId: string, questionId: string) => {
    const userActivity = await UserActivity.findOne({ user: new ObjectId(userId) });

    if (userActivity) {
        const bookmarkedIndex = userActivity.bookmarkedQuestions.indexOf(new mongoose.Types.ObjectId(questionId));
        if (bookmarkedIndex === -1) {
            userActivity.bookmarkedQuestions.push(new mongoose.Types.ObjectId(questionId));;
        } else {
            userActivity.bookmarkedQuestions.splice(bookmarkedIndex, 1);
        }
        await userActivity.save();
    } else {
        const newUserActivity = new UserActivity({
            user: new mongoose.Types.ObjectId(userId),
            bookmarkedQuestions: [new mongoose.Types.ObjectId(questionId)],
            completedQuestions: [],
            enrolledCourses: [],
        });
        await newUserActivity.save();
    }
};

// Add or remove a completed question
export const toggleCompletedQuestion = async (userId: string, questionId: string) => {
    const userActivity = await UserActivity.findOne({ user: new ObjectId(userId) });

    if (userActivity) {
        const completedIndex = userActivity.completedQuestions.indexOf(new mongoose.Types.ObjectId(questionId));
        if (completedIndex === -1) {
            userActivity.completedQuestions.push(new mongoose.Types.ObjectId(questionId));
        } else {
            userActivity.completedQuestions.splice(completedIndex, 1);
        }
        await userActivity.save();
    } else {
        const newUserActivity = new UserActivity({
            user: new mongoose.Types.ObjectId(userId),
            bookmarkedQuestions: [],
            completedQuestions: [new mongoose.Types.ObjectId(questionId)],
            enrolledCourses: [],
        });
        await newUserActivity.save();
    }
};

// Add or remove an enrolled class
export const toggleEnrolledClass = async (userId: string, courseId: string) => {
    const userActivity = await UserActivity.findOne({ user: new ObjectId(userId) });

    if (userActivity) {
        const enrolledIndex = userActivity.enrolledCourses.indexOf(new mongoose.Types.ObjectId(courseId));
        if (enrolledIndex === -1) {
            userActivity.enrolledCourses.push(new mongoose.Types.ObjectId(courseId));
        } else {
            userActivity.enrolledCourses.splice(enrolledIndex, 1);
        }
        await userActivity.save();
    } else {
        const newUserActivity = new UserActivity({
            user: new mongoose.Types.ObjectId(userId),
            bookmarkedQuestions: [],
            completedQuestions: [],
            enrolledCourses: [new mongoose.Types.ObjectId(courseId)],
        });
        await newUserActivity.save();
    }
};

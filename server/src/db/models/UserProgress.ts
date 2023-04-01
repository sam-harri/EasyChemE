import mongoose, { Schema, model, Document } from 'mongoose';

interface QuestionsByCourse {
    [courseId: string]: string[];
}


export interface IUserProgress extends Document {
    userId: string;
    enrolledCourses: string[];
    completedQuestions: QuestionsByCourse;
    bookmarkedQuestions: QuestionsByCourse;
}

const UserProgressSchema = new Schema<IUserProgress>({
    userId: { type: String, required: true },
    enrolledCourses: { type: [String], default: [] },
    completedQuestions: {
        type: Schema.Types.Mixed,
        default: {},
    },
    bookmarkedQuestions: {
        type: Schema.Types.Mixed,
        default: {},
    },
    
});

const UserProgress = mongoose.model('UserProgress', UserProgressSchema);

export default UserProgress;

import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true,
    },
    classCode: {
        type: String,
        required: true,
        unique: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    classDescription: {
        type: String,
        required: true,
    },
});

const Course = mongoose.model('Course', courseSchema);

export default Course;

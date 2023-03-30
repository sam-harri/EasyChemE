const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    uniqueID: {
        type: String,
        required: true,
        unique: true,
    },
    classCode: {
        type: Number,
        required: true,
    },
    module: {
        type: Number,
        required: true,
    },
    questionNumber: {
        type: Number,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String, // Store the answer as a string and later convert it into JSX/HTML when rendering
        required: true,
    },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;

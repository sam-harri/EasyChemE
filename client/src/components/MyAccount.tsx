import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';

interface Course {
    id: number;
    image: string;
    title: string;
    description: string;
    completedLessons: number;
    totalLessons: number;
}

interface QuestionProps {
    questionID: string;
    question: string;
    answer: JSX.Element;
}

const MyAccount: React.FC = () => {
    // Replace with data fetched from your API or state management
    const enrolledCourses: Course[] = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Course 1',
            description: 'Course description 1',
            completedLessons: 3,
            totalLessons: 10,
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Course 2',
            description: 'Course description 2',
            completedLessons: 7,
            totalLessons: 10,
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Course 3',
            description: 'Course description 3',
            completedLessons: 1,
            totalLessons: 10,
        }
    ];

    const bookmarkedQuestions: QuestionProps[] = [
        {
            questionID: "1",
            question: "What is the capital of France?",
            answer: <p>The capital of France is Paris.</p>,
        },
        {
            questionID: "2",
            question: "What is the largest mammal?",
            answer: <p>The largest mammal is the blue whale.</p>,
        },
        {
            questionID: "3",
            question: "What is the tallest mountain in the world?",
            answer: <p>The tallest mountain in the world is Mount Everest.</p>,
        },
        {
            questionID: "4",
            question: "What is the smallest planet in our solar system?",
            answer: <p>The smallest planet in our solar system is Mercury.</p>,
        },
        {
            questionID: "5",
            question: "What is the most populous country in the world?",
            answer: <p>The most populous country in the world is China.</p>,
        },
    ];


    return (
        <div className="container mb-5">
            <h2 style={{ marginTop: '100px' }}>My Courses</h2>
            <div className="row">
                {enrolledCourses.length > 0 ? (
                    enrolledCourses.map((course) => (
                        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                {/* Replace with a real thumbnail URL */}
                                <img src={course.image} className="card-img-top" alt={`${course.title} thumbnail`} />
                                <div className="card-body">
                                    <h4 className="card-title">{course.title}</h4>
                                    <p className="card-text">{course.description}</p>
                                    <div className="progress mb-2">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${(course.completedLessons / course.totalLessons) * 100}%`,
                                            }}
                                            aria-valuenow={course.completedLessons}
                                            aria-valuemin={0}
                                            aria-valuemax={course.totalLessons}
                                        ></div>
                                    </div>
                                    <p className="mb-0">
                                        Completed Lessons: {course.completedLessons}/{course.totalLessons}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 mt-2">
                        <div className="alert alert-light" role="alert">
                            No enrolled courses found.
                        </div>
                    </div>
                )}
            </div>

            <h2 className="my-4">My Bookmarks</h2>
            {bookmarkedQuestions.length > 0 ? (
                bookmarkedQuestions.map((question, index) => (
                    <Question
                        questionID={question.questionID}
                        question={question.question}
                        answer={question.answer}
                    />
                ))
            ) : (
                <div className="alert alert-light" role="alert">
                    No bookmarked questions found.
                </div>
            )}
        </div>
    );
};

export default MyAccount;

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
    classCode: string;
    module: string;
    questionNumber: string,
    question: string;
    answer: string;
}

interface MyAccountProps {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const MyAccount: React.FC<MyAccountProps> = ({ loggedInUser, setLoggedInUser }) => {
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
            questionID: "112500010001",
            classCode : '1125',
            module : '1',
            questionNumber: '1',
            question:
                "<p>What is the solution to the equation $f(x) = 3x^3 - 2x^2 + x - 4$ fart poop one two</p>",
            answer:
                "<p>The Pythagorean theorem states that for a right triangle with legs of length $a$ and $b$, and hypotenuse of length $c$, the following equation holds: $a^2 + b^2 = c^2$.</p><img src='https://via.placeholder.com/150' alt='placeholder'/>",
        },
    ];


    //<img src='https://via.placeholder.com/150' alt='placeholder'/>

    return (
        <div className="container mb-5">
            <h2 style={{ marginTop: '100px' }}>My Courses</h2>
            <div className="row">
                {enrolledCourses.length > 0 ? (
                    enrolledCourses.map((course) => (
                        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
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
                        classCode={question.classCode}
                        module={question.module}
                        questionNumber={question.questionNumber}
                        question={question.question}
                        answer={question.answer}
                        loggedInUser={loggedInUser}
                        setLoggedInUser={setLoggedInUser}
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

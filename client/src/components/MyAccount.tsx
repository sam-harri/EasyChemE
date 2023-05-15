import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
import EnrollButton from './EnrollButton';
import { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

interface CourseProps {
    classCode: string;
    imgUrl: string;
    className: string;
    completedQuestionsCount: number;
    totalQuestionsCount: number;
}

interface QuestionProps {
    uniqueID: string;
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

    const [enrolledClasses, setEnrolledClasses] = useState<CourseProps[]>([]);

    const fetchEnrolledClassesWithStats = async () => {
        const res = await axiosInstance.get('/userprogress/getEnrolledClassesWithStats?userId=' + loggedInUser._id);
        setEnrolledClasses(res.data.enrolledClasses);
    };

    useEffect(() => {

        if (loggedInUser && loggedInUser._id) {
            fetchEnrolledClassesWithStats();
        }
    }, [loggedInUser]);

    const [bookmarkedQuestions, setBookmarkedQuestions] = useState<QuestionProps[]>([]);

    useEffect(() => {
        const fetchBookmarkedQuestions = async () => {
            // Fetch all bookmarked questions for the user
            const res = await axiosInstance.get('/userprogress/getAllBookmarked?userId=' + loggedInUser._id);
            setBookmarkedQuestions(res.data.bookmarkedQuestions);
        };

        if (loggedInUser && loggedInUser._id) {
            fetchBookmarkedQuestions();
        }
    }, [loggedInUser]);


    //<img src='https://via.placeholder.com/150' alt='placeholder'/>

    return (
        <div className="container my-5">
            <h2 style={{ marginTop: '100px' }}>My Courses</h2>
            <div className="row">
                {enrolledClasses.length > 0 ? (
                    enrolledClasses.map((course) => (
                        <div key={course.classCode} className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100 d-flex flex-column">
                                <div style={{ overflow: "hidden", paddingTop: "56.67%", position: "relative" }}>
                                    <img src={course.imgUrl} className="card-img-top" alt={`${course.className} thumbnail`} style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <div className="d-flex align-items-center justify-content-center" style={{ height: "64px" }}>
                                        <h4 className="card-title text-center m-0">{course.className}</h4>
                                    </div>
                                    <hr />
                                    <div className="d-flex flex-column justify-content-end" style={{ flexGrow: 1 }}>
                                        <div className="progress mb-4">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${(course.completedQuestionsCount / course.totalQuestionsCount) * 100}%`,
                                                }}
                                                aria-valuenow={course.completedQuestionsCount}
                                                aria-valuemin={0}
                                                aria-valuemax={course.totalQuestionsCount}
                                            ></div>
                                        </div>
                                        <p className="mb-0 text-center font-weight-bold">
                                            Completed Questions: {course.completedQuestionsCount}/{course.totalQuestionsCount}
                                        </p>
                                        <div className='text-center my-2'>
                                            <EnrollButton
                                                loggedInUser={loggedInUser}
                                                setLoggedInUser={setLoggedInUser}
                                                courseId={course.classCode}
                                                onEnrollChange={fetchEnrolledClassesWithStats}
                                            />
                                        </div>
                                    </div>
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
                        questionID={question.uniqueID}
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

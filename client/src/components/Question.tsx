import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiBookmark, BiBookmarkAlt, BiCheck } from 'react-icons/bi';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';


declare global {
    interface Window {
        MathJax: {
            typesetPromise: (elements?: HTMLElement[]) => Promise<void>;
        };
    }
}

interface QuestionProps {
    questionID: string;
    classCode: string,
    module: string,
    questionNumber: string;
    question: string;
    answer: string;
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const Question: React.FC<QuestionProps> = ({
    questionID,
    classCode,
    module,
    questionNumber,
    question,
    answer,
    loggedInUser,
    setLoggedInUser,
}) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [bookmarkToggled, setBookmarkToggled] = useState(false);
    const [checkToggled, setCheckToggled] = useState(false);

    const answerRef = useRef<HTMLDivElement>(null);
    const questionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const fetchUserBookmarks = async () => {
        try {
            const response = await axiosInstance.get('/userProgress/getUserBookmarks', {
                params: { userId: loggedInUser._id },
            });
            return response.data.bookmarkedQuestions[classCode] || [];
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const fetchUserCompleted = async () => {
        try {
            const response = await axiosInstance.get('/userProgress/getUserCompleted', {
                params: { userId: loggedInUser._id },
            });
            return response.data.completeQuestions[classCode] || [];
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    useEffect(() => {
        const updateUserQuestions = async () => {
            if (loggedInUser) {
                const userBookmarks = await fetchUserBookmarks();
                setBookmarkToggled(userBookmarks.includes(questionID));
                const userCompleted = await fetchUserCompleted();
                setCheckToggled(userCompleted.includes(questionID))
            }
        };
        updateUserQuestions();
    }, [loggedInUser, questionID, classCode]);

    useEffect(() => {
        const handleMathJaxReady = () => {
            if (window.MathJax) {
                if (showAnswer && answerRef.current) {
                    window.MathJax.typesetPromise([answerRef.current]);
                }
                if (questionRef.current) {
                    window.MathJax.typesetPromise([questionRef.current]);
                }
            }
        };

        if (window.MathJax) {
            if (showAnswer && answerRef.current) {
                window.MathJax.typesetPromise([answerRef.current]);
            }
            if (questionRef.current) {
                window.MathJax.typesetPromise([questionRef.current]);
            }
        } else {
            document.addEventListener('MathJaxReady', handleMathJaxReady);
        }

        return () => {
            document.removeEventListener('MathJaxReady', handleMathJaxReady);
        };
    }, [showAnswer]);


    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const toggleBookmark = async () => {
        if (!loggedInUser) {
            navigate('/login');
            return;
        }

        const userId = loggedInUser._id;
        const body = { courseId: classCode, questionId: questionID, userId };

        try {
            if (bookmarkToggled) {
                setBookmarkToggled(false)
                await axiosInstance.patch('/userProgress/unbookmarkQuestion', body);
            } else {
                setBookmarkToggled(true);
                await axiosInstance.patch('/userProgress/bookmarkQuestion', body);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const toggleCheck = async () => {
        if (!loggedInUser) {
            navigate('/login');
            return;
        }

        const userId = loggedInUser._id;
        const body = { courseId: classCode, questionId: questionID, userId };

        try {
            if (checkToggled) {
                setCheckToggled(false);
                await axiosInstance.patch('/userProgress/removeCompletedQuestion', body);
            } else {
                setCheckToggled(true);
                await axiosInstance.patch('/userProgress/completeQuestion', body);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const goldenColor = '#ffdf00';
    const bootstrapBlue = '#0d6efd';
    const green = 'green';

    return (
        <div id={questionID} className="card mb-3 mx-auto" style={{ maxWidth: '1300px' }}>
            <div className="card-body d-flex align-items-center justify-content-between">
                <div style={{ display: 'inline-flex', alignItems: 'baseline' }}>
                    <span className="fs-5 mt-3">{questionNumber}.&nbsp;&nbsp;&nbsp;</span>
                    <div className="fs-5 mt-3" ref={questionRef} dangerouslySetInnerHTML={{ __html: question }}></div>
                </div>
                <div>
                    {bookmarkToggled ? (
                        <span className="me-3" onClick={loggedInUser ? toggleBookmark : () => navigate('/login')}>
                            <BiBookmarkAlt size={30} color={bootstrapBlue} />
                        </span>
                    ) : (
                        <span className="me-3" onClick={loggedInUser ? toggleBookmark : () => navigate('/login')}>
                            <BiBookmark size={30} />
                        </span>
                    )}
                    {checkToggled ? (
                        <span className="me-3" onClick={loggedInUser ? toggleCheck : () => navigate('/login')}>
                            <IoCheckmarkCircleSharp size={30} color={bootstrapBlue} />
                        </span>
                    ) : (
                        <span className="me-3" onClick={loggedInUser ? toggleCheck : () => navigate('/login')}>
                            <BiCheck size={30} color="black" />
                        </span>
                    )}
                    {/* {checkToggled ? (
                        <span className="text-success me-3" onClick={toggleCheck}>
                            <IoCheckmarkCircleSharp size={30} color={bootstrapBlue} />
                        </span>
                    ) : (
                        <span className="text-primary me-3" onClick={toggleCheck}>
                            <BiCheck size={30} color="black" />
                        </span>
                    )} */}
                    {showAnswer ? (
                        <span className="text-muted" onClick={toggleAnswer}>
                            <AiOutlineCaretUp size={30} />
                        </span>
                    ) : (
                        <span className="text-muted" onClick={toggleAnswer}>
                            <AiOutlineCaretDown size={30} />
                        </span>
                    )}
                </div>
            </div>
            {showAnswer && (
                <div className="card-body border-top">
                    <div className="fw-bold mb-2">Answer:</div>
                    <div ref={answerRef} dangerouslySetInnerHTML={{ __html: answer }}></div>
                </div>
            )}
        </div>
    );

};

export default Question;
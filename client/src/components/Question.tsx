import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiBookmark, BiBookmarkAlt, BiCheck } from 'react-icons/bi';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

interface QuestionProps {
    questionID: string;
    question: string;
    answer: JSX.Element;
}

const Question: React.FC<QuestionProps> = ({ questionID: questionNumber, question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [bookmarkToggled, setBookmarkToggled] = useState(false);
    const [checkToggled, setCheckToggled] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const toggleBookmark = () => {
        setBookmarkToggled(!bookmarkToggled);
    };

    const toggleCheck = () => {
        setCheckToggled(!checkToggled);
    };

    const goldenColor = '#ffdf00';
    const bootstrapBlue = '#0d6efd';
    const green = 'green'

    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: '1300px' }}>
            <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                    <span className="fs-5 me-3">{questionNumber}.</span>
                    <span className="fs-5">{question}</span>
                </div>
                <div>
                    {bookmarkToggled ? (
                        <span className="me-3" onClick={toggleBookmark}>
                            <BiBookmarkAlt size={30} color={bootstrapBlue} />
                        </span>
                    ) : (
                        <span className="me-3" onClick={toggleBookmark}>
                            <BiBookmark size={30} />
                        </span>
                    )}
                    {checkToggled ? (
                        <span className="text-success me-3" onClick={toggleCheck}>
                            <IoCheckmarkCircleSharp size={30} color={bootstrapBlue} />
                        </span>
                    ) : (
                        <span className="text-primary me-3" onClick={toggleCheck}>
                            <BiCheck size={30} color='black' />
                        </span>
                    )}
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
                    {answer}
                </div>
            )}
        </div>
    );
};

export default Question;

import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';
import Question from './Question';

interface QuestionListProps {
    courseCode: string;
    courseModule: string;
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

interface QuestionData {
    uniqueID: string;
    classCode: string;
    module: string;
    questionNumber: string;
    question: string;
    answer: string;
}  

const QuestionList: React.FC<QuestionListProps> = ({ courseCode, courseModule, loggedInUser, setLoggedInUser }) => {
    const [questions, setQuestions] = useState<QuestionData[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axiosInstance.get(`/questions?courseCode=${courseCode}&courseModule=${courseModule}`);
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [courseCode, courseModule]);

    return (
        <div>
            {questions.map((question, index) => (
                <Question
                    key={question.uniqueID}
                    questionID={question.uniqueID}
                    classCode={question.classCode}
                    module={question.module}
                    questionNumber={question.questionNumber}
                    question={question.question}
                    answer={question.answer}
                    loggedInUser={loggedInUser}
                    setLoggedInUser={setLoggedInUser}
                />
            ))}
        </div>
    );
};

export default QuestionList;

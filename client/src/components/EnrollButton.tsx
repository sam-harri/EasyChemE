// EnrollButton.tsx
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';

interface EnrollButtonProps {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
    courseId: string;
    onEnrollChange?: () => void;
}

const EnrollButton: React.FC<EnrollButtonProps> = ({ loggedInUser, setLoggedInUser, courseId, onEnrollChange }) => {
    const [isEnrolled, setIsEnrolled] = useState(false);

    useEffect(() => {
        const fetchUserEnrollment = async () => {
            if (loggedInUser) {
                try {
                    const response = await axiosInstance.get('/userProgress/getUserEnrolled', {
                        params: { userId: loggedInUser._id },
                    });
                    const enrolledCourses = response.data.enrolledCourses || [];
                    setIsEnrolled(enrolledCourses.includes(courseId));
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchUserEnrollment();
    }, [loggedInUser, courseId]);

    const handleEnrollClick = async () => {
        if (!loggedInUser) {
            window.location.href = "/login";
            return;
        }
    
        const userId = loggedInUser._id;
        const body = { userId, courseId };
    
        try {
            if (isEnrolled) {
                setIsEnrolled(false);
                await axiosInstance.patch('/userProgress/unenrollInCourse', body);
            } else {
                setIsEnrolled(true);
                await axiosInstance.patch('/userProgress/enrollInCourse', body);
            }
            if (onEnrollChange) {
                onEnrollChange(); // Call the callback function after enrolling/unenrolling if provided
            }
        } catch (error) {
            console.error("Error while enrolling/unenrolling:", error);
        }
    };
    

    return (
        <button className="btn btn-primary" onClick={handleEnrollClick}>
            {isEnrolled ? "Unenroll" : "Enroll"}
        </button>
    );
};

export default EnrollButton;

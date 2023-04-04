const mongoose = require('mongoose');
import Course from "./models/Course";

export const insertData = async () => {


    const enrolledCoursesData = [
        {
            classCode: '3111',
            imgUrl: 'https://via.placeholder.com/150',
            className: 'Unit Operations',
            classDescription: 'Study of distillation columns, extraction methods, water cooling, drying, leaching, and more, this core class in chemical engineering focuses on the fundamental principles underlying each unit operation and how to apply them in the design and optimization of chemical processes.',
        },
        {
            classCode: '1371',
            imgUrl: 'https://via.placeholder.com/150',
            className: 'Numerical Methods and Engineering Computation',
            classDescription: 'Explore advanced numerical methods and the foundation of programming in Python. Topics include linear least squares, empirical model building, nonlinear equation solving with programming and Excel Solver, numerical integration, and differential equation solving through practical exercises.',
        },
        {
            classCode: '1125',
            imgUrl: 'https://via.placeholder.com/150',
            className: 'Chemical Engineering Fundamentals',
            classDescription: 'Learn essential concepts in chemical engineering with this fundamentals class. Topics covered include systems of units, material balances for single and multiple units, recycle and bypass, reactive and non-reactive systems, chemical equilibrium, phase diagrams, and energy balances.',
        }
    ];

    Course.insertMany(enrolledCoursesData)
        .then((result: any) => {
            console.log('Sample questions added:', result);
        })
        .catch((error: any) => {
            console.error('Error adding sample questions:', error);
        });
}
const mongoose = require('mongoose');
import Question from "./models/Question";

export const insertData = async () => {
    const sampleQuestions = [
        {
            uniqueID: "112500010001",
            classCode: 1125,
            module: 1,
            questionNumber: 1,
            question:
                "<p>What is the value of $x$ in the equation $2x^2 + 3x - 4 = 0$?</p>",
            answer:
                "<p>The solution to the given quadratic equation can be found using the quadratic formula: $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.</p><p>Substituting the values from the given equation, we get:</p><p>$x = \\frac{-(3) \\pm \\sqrt{(3)^2 - 4(2)(-4)}}{2(2)}$</p><p>$x = \\frac{-3 \\pm \\sqrt{57}}{4}$</p><p>Therefore, the value of $x$ is $\\frac{-3 \\pm \\sqrt{57}}{4}$.</p><img src='https://via.placeholder.com/150' alt='placeholder'/>",
        },
        {
            uniqueID: "112500010002",
            classCode: 1125,
            module: 1,
            questionNumber: 2,
            question:
                "<p>What is the derivative of $f(x) = \\sin(x) + \\cos(x)$?</p>",
            answer:
                "<p>The derivative of $f(x)$ can be found using the chain rule and sum rule of differentiation as follows: $f'(x) = (\\sin(x) + \\cos(x))' = \\cos(x) - \\sin(x)$ Therefore, the derivative of $f(x)$ is $\\cos(x) - \\sin(x)$.</p><img src='https://via.placeholder.com/150' alt='placeholder'/>",
        },
        {
            uniqueID: "112500010003",
            classCode: 1125,
            module: 1,
            questionNumber: 3,
            question:
                "<p>What is the volume of a sphere with radius $r$?</p>",
            answer:
                "<p>The volume of a sphere with radius $r$ can be found using the following formula: $V = \\frac{4}{3}\\pi r^3$ Therefore, the volume of a sphere with radius $r$ is $\\frac{4}{3}\\pi r^3$.</p><img src='https://via.placeholder.com/150' alt='placeholder'/>",
        },
        {
            uniqueID: "112500020001",
            classCode: 1125,
            module: 2,
            questionNumber: 1,
            question:
                "<p>poop fart  $f(x) = \\sin(x) + \\cos(x)$?</p>",
            answer:
                "<p>The derivative of $f(x)$ can be found using the chain rule and sum rule of differentiation as follows: $f'(x) = (\\sin(x) + \\cos(x))' = \\cos(x) - \\sin(x)$ Therefore, the derivative of $f(x)$ is $\\cos(x) - \\sin(x)$.</p><img src='https://via.placeholder.com/150' alt='placeholder'/>",
        },
        {
            uniqueID: "231200010001",
            classCode: 2312,
            module: 1,
            questionNumber: 1,
            question:
                "<p>caca bum bum sphere with radius $r$?</p>",
            answer:
                "<p>The volume of a sphere with radius $r$ can be found using the following formula: $V = \\frac{4}{3}\\pi r^3$ Therefore, the volume of a sphere with radius $r$ is $\\frac{4}{3}\\pi r^3$.</p><img src='https://via.placeholder.com/150' alt='placeholder'/>",
        }
    ]

    Question.insertMany(sampleQuestions)
        .then((result: any) => {
            console.log('Sample questions added:', result);
        })
        .catch((error: any) => {
            console.error('Error adding sample questions:', error);
        });
}
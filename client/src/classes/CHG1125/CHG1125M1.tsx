import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from '../../components/QuestionList';

interface CHG1125Props {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG1125M1: React.FC<CHG1125Props> = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <div className="container" style={{marginTop:'70px'}}>
            <h1 className="pt-5">Module 1: System of Units and Dimensions</h1>
            <h2>Introduction</h2>
            <p>
                In this module, we will cover the basics of the system of units and dimensions used in chemical engineering. Understanding units and dimensions is crucial for performing calculations, analyzing data, and communicating results in the field.
            </p>
            <h2>System of Units</h2>
            <p>
                A system of units is a collection of units for expressing the magnitudes of various physical quantities. In chemical engineering, the most commonly used systems are the International System of Units (SI) and the US Customary System (USCS). The SI system is based on the metric system and is widely used in scientific and engineering disciplines globally.
            </p>
            <h2>Dimensions</h2>
            <p>
                Dimensions are used to describe the fundamental nature of a physical quantity. The basic dimensions include:
            </p>
            <ul>
                <li>Length (L)</li>
                <li>Mass (M)</li>
                <li>Time (T)</li>
                <li>Temperature (Θ)</li>
                <li>Amount of substance (N)</li>
                <li>Electric current (I)</li>
                <li>Luminous intensity (J)</li>
            </ul>
            <p>
                Derived dimensions are combinations of the basic dimensions, such as area (L²), volume (L³), velocity (L/T), and acceleration (L/T²). Understanding dimensions is essential for converting between different units and ensuring the consistency of units in calculations.
            </p>
            <QuestionList courseCode={'1125'} courseModule={'1'} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </div>
    );
};

export default CHG1125M1;

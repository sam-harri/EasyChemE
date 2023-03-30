import React from 'react';
import { Link } from 'react-router-dom';

interface CHG1125HomeProps {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG1125Home: React.FC<CHG1125HomeProps> = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <>
            <h1 style={{marginTop:'70px'}}>Welcome to CHG1125: Chemical Engineering Fundamentals</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src='https://via.placeholder.com/150' alt="Chemical Engineering" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p>
                        This course provides an introduction to the Chemical Engineering profession in relation to the chemical process industry. Topics covered include:
                    </p>
                    <ul>
                        <li>System of units, dimensions</li>
                        <li>Processes, process variables and flowcharts</li>
                        <li>Material balances: single and multiple units, recycle and bypass, reactive and non-reactive systems</li>
                        <li>Chemical equilibrium, single-phase and multi-phase systems, solutions, phase diagrams</li>
                        <li>Introduction to energy balances</li>
                        <li>Unit operations and instrumentation</li>
                    </ul>
                </div>
            </div>
            <Link to="/CHG1125/module1">
                <button className="btn btn-primary mt-3">Module 1</button>
            </Link>
        </>
    );
};

export default CHG1125Home;

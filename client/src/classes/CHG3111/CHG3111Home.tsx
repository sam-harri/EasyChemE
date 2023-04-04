import React from 'react';
import { Link } from 'react-router-dom';

interface CHG3111HomeProps {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG3111Home: React.FC<CHG3111HomeProps> = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <>
            <h1 className="mt-5">Welcome to CHG1125: Unit Operations in Chemical Engineering</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src='https://via.placeholder.com/150' alt="Unit Operations" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p>
                        This course provides a comprehensive overview of various unit operations commonly used in the chemical process industry. Topics covered include:
                    </p>
                    <ul className="list-unstyled">
                        <li>- Fluid flow and transport phenomena</li>
                        <li>- Heat transfer operations: heat exchangers, evaporators, condensers</li>
                        <li>- Mass transfer operations: distillation, absorption, extraction, adsorption</li>
                        <li>- Mechanical separations: filtration, sedimentation, centrifugation, cyclones</li>
                        <li>- Mixing and agitation</li>
                        <li>- Solid-liquid separation: crystallization, drying, leaching</li>
                        <li>- Chemical reactor design and operation</li>
                    </ul>
                </div>
            </div>
            <Link to="/CHG3111/module1">
                <button className="btn btn-primary mt-3">Module 1</button>
            </Link>
        </>
    );
};

export default CHG3111Home;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import CHG1125M1 from './CHG1125M1';
import CHG1125Home from './CHG1125Home';

interface CHG1125Props {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG1125: React.FC<CHG1125Props> = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<CHG1125Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
                <Route path="module1" element={<CHG1125M1 loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
                {/* Add more module routes here */}
            </Routes>
            <Outlet />
        </div>
    );
};

export default CHG1125;

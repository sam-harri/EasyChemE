import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import CHG3111M1 from './CHG3111M1';
import CHG3111Home from './CHG3111Home';

interface CHG1125Props {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG3111: React.FC<CHG1125Props> = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<CHG3111Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
                <Route path="/module1" element={<CHG3111M1 loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
                {/* Add more module routes here */}
            </Routes>
            <Outlet />
        </div>
    );
};

export default CHG3111;

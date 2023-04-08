import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { CSSProperties } from 'react';
import { Link, useNavigate } from 'react-router-dom';


interface NavbarProps {
    brandImage: string;
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ brandImage, loggedInUser, setLoggedInUser }) => {
    const fontStyle: CSSProperties = { color: 'black', fontSize: '20px' };
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        navigate('/');
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-light fixed-top" style={{ height: '70px', overflow: 'visible', backgroundColor: 'transparent' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={brandImage} alt="Logo" width="auto" height="40" className="d-inline-block align-text-top me-2" />
                </Link>
                <ul className="navbar-nav d-flex flex-row justify-content-end align-items-center custom-navbar" style={fontStyle}>
                    {loggedInUser ? (
                        <>
                            <li className="nav-item me-3">
                                <Link to="/MyAccount">
                                    <button type="button" className="btn btn-outline-primary">MyAccount</button>
                                </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/">
                                    <button type="button" className="btn btn-outline-primary" onClick={handleLogout}> Logout </button>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item me-3">
                            <Link to="/login">
                                <button type="button" className="btn btn-outline-primary">Login</button>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>

    );
};

export default Navbar;

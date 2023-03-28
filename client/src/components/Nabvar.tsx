import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    brandImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandImage }) => {
    const fontStyle : CSSProperties = { color: 'black', fontSize: '20px'};

    const [isDropdownMenuOpen1, setIsDropdownMenuOpen1] = useState(false);
    const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
    const [isDropdownMenuOpen3, setIsDropdownMenuOpen3] = useState(false);
    const [isDropdownMenuOpen4, setIsDropdownMenuOpen4] = useState(false);

    return (
        <nav className="navbar navbar-light bg-light fixed-top" style={{ height: '70px', overflow: 'visible' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={brandImage} alt="Logo" width="auto" height="40" className="d-inline-block align-text-top me-2" />
                </Link>
                <ul className="navbar-nav d-flex flex-row justify-content-end align-items-center custom-navbar" style={fontStyle}>
                    <li className="nav-item me-3" onMouseEnter={() => setIsDropdownMenuOpen1(true)} onMouseLeave={() => setIsDropdownMenuOpen1(false)}>
                        <a className="nav-link" href="#" style={fontStyle}>CHG1125</a>
                        <DropdownMenu isOpen={isDropdownMenuOpen1} items={["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6", "Chapter 7", "Chapter 8"]}/>
                    </li>
                    <li className="nav-item me-3" onMouseEnter={() => setIsDropdownMenuOpen2(true)} onMouseLeave={() => setIsDropdownMenuOpen2(false)}>
                        <a className="nav-link" href="#" style={fontStyle}>CHG1271</a>
                        <DropdownMenu isOpen={isDropdownMenuOpen2} items={["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"]}/>
                    </li>
                    <li className="nav-item me-3" onMouseEnter={() => setIsDropdownMenuOpen3(true)} onMouseLeave={() => setIsDropdownMenuOpen3(false)}>
                        <a className="nav-link" href="#" style={fontStyle}>CHG2212</a>
                        <DropdownMenu isOpen={isDropdownMenuOpen3} items={["Chapter 1", "Chapter 2", "Chapter 3"]}/>
                    </li>
                    <li className="nav-item me-3" onMouseEnter={() => setIsDropdownMenuOpen4(true)} onMouseLeave={() => setIsDropdownMenuOpen4(false)}>
                        <a className="nav-link" href="#" style={fontStyle}>CHG2217</a>
                        <DropdownMenu isOpen={isDropdownMenuOpen4} items={["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5", "Chapter 6"]} />
                    </li>
                    <li className="nav-item me-3">
                        <Link to="/login">
                            <button type="button" className="btn btn-outline-primary">Login</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

//a logo for a website to learn chemical engineering called "easyChemE"
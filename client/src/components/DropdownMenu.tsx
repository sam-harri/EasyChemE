import React from 'react';
import { CSSProperties } from 'react';

interface DropdownMenuProps {
    isOpen: boolean;
    alignRight?: boolean;
    items: string[]; // Add this prop
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, alignRight, items }) => {
    const menuStyle: CSSProperties = alignRight
        ? { position: 'absolute', right: 0, zIndex : 2000 }
        : { position: 'absolute', zIndex : 2000 };

    return isOpen ? (
        <div style={menuStyle}>
            <div className="dropdown-menu show">
                <a className="dropdown-item" href="#">Overview</a>
                <div className="dropdown-divider"></div>
                {items.map((item, index) => (
                    <a key={index} className="dropdown-item" href="#">
                        {item}
                    </a>
                ))}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Exam Preparation</a>
            </div>
        </div>
    ) : null;
};

export default DropdownMenu;
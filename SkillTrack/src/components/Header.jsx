import React from 'react';
import { FaMoon, FaSun, FaFileExport, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ theme, onToggleTheme, onExport, onLogout }) => {
    return (
        <header className="app-header">
            <div className="header-left">
                <div className="header-avatar">A</div>
                <div className="header-info">
                    <h1>Ashish's Learning Dashboard</h1>
                    <p>Full-Stack Development Progress</p>
                </div>
            </div>
            <div className="header-actions">
                <button className="header-btn" onClick={onToggleTheme} title="Toggle Theme">
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
                <button className="header-btn" onClick={onExport} title="Export Progress">
                    <FaFileExport />
                </button>
                <button className="header-btn" onClick={onLogout} title="Logout">
                    <FaSignOutAlt />
                </button>
            </div>
        </header>
    );
};

export default Header;
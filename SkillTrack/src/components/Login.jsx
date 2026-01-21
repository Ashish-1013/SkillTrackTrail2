import React, { useState } from 'react';
import { PASSWORD, STORAGE_KEYS } from '../data/constants';
import { FaRocket, FaLock } from 'react-icons/fa';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (password === PASSWORD) {
            localStorage.setItem(STORAGE_KEYS.LOGIN, "true");
            onLogin();
        } else {
            setError("Incorrect password");
            setPassword('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-avatar">A</div>
                <h1>Welcome Back, Ashish!</h1>
                <p>Continue your learning journey</p>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter password: 9777641455"
                    />
                </div>
                <button className="login-btn" onClick={handleLogin}>
                    <FaRocket /> Login
                </button>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

export default Login;
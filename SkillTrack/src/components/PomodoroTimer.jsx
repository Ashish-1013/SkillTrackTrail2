import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = ({ isOpen, onClose }) => {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        alert("Time's up! Take a break.");
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);

    if (!isOpen) return null;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const startTimer = () => {
        setIsRunning(true);
    };

    const pauseTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(25 * 60);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h3>Pomodoro Timer</h3>
                <div className="timer-display">
                    {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </div>
                <div className="timer-controls">
                    <button onClick={startTimer} disabled={isRunning}>
                        Start
                    </button>
                    <button onClick={pauseTimer} disabled={!isRunning}>
                        Pause
                    </button>
                    <button onClick={resetTimer}>
                        Reset
                    </button>
                </div>
                <button className="close-btn" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default PomodoroTimer;
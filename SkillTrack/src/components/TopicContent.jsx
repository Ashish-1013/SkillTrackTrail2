import React, { useState, useEffect } from 'react';
import { topics, timeEstimates, quotes } from '../data/constants';
import SubtopicCard from './SubtopicCard';
import { FaCheckDouble, FaClock, FaListCheck } from 'react-icons/fa';

const TopicContent = ({
    currentPhase,
    currentTopic,
    progressData,
    onToggleProgress,
    onRateDifficulty,
    onShowResources,
    onToggleAllSubtopics,
    onTogglePomodoro,
    dailyGoal,
    todayCompleted,
    onSetDailyGoal
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [goalInput, setGoalInput] = useState('');
    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, [currentPhase]);

    if (!currentPhase || !currentTopic) {
        return null;
    }

    const total = currentTopic.subs.length;
    let done = 0;
    currentTopic.subs.forEach((sub, index) => {
        const key = `${currentPhase.id}_${index}`;
        if (progressData[key]) done++;
    });
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    const dashoffset = 283 - (283 * percent) / 100;

    const filteredSubtopics = currentTopic.subs.filter(sub =>
        sub.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSetDailyGoal = () => {
        const goal = parseInt(goalInput);
        if (goal > 0) {
            onSetDailyGoal(goal);
            setGoalInput('');
        }
    };

    const goalPercent = dailyGoal > 0 ? Math.round((todayCompleted / dailyGoal) * 100) : 0;

    return (
        <div className="topic-content">
            <div className="topic-header">
                <div>
                    <h1 className="topic-title">{currentTopic.title}</h1>
                    <div className="topic-tags">
                        <span className="topic-tag">{currentPhase.phase}</span>
                        {currentTopic.important && (
                            <span className="topic-tag important">Important</span>
                        )}
                    </div>
                    <div className="motivational-quote">{randomQuote}</div>
                </div>
                <div className="topic-actions">
                    <button className="topic-btn" onClick={onToggleAllSubtopics} title="Toggle All">
                        <FaCheckDouble />
                    </button>
                    <button className="topic-btn" onClick={onTogglePomodoro} title="Pomodoro Timer">
                        <FaClock />
                    </button>
                </div>
            </div>

            <div className="goal-tracker">
                <div className="goal-input">
                    <input
                        type="number"
                        value={goalInput}
                        onChange={(e) => setGoalInput(e.target.value)}
                        placeholder="Set daily goal"
                        min="1"
                        max="20"
                    />
                    <button onClick={handleSetDailyGoal}>Set Goal</button>
                </div>
                <div className="goal-progress">
                    <span>Goal: {todayCompleted}/{dailyGoal}</span>
                    <div className="goal-bar">
                        <div className="goal-fill" style={{ width: `${goalPercent}%` }}></div>
                    </div>
                </div>
            </div>

            <div className="progress-display">
                <div className="progress-circle">
                    <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle className="progress-ring-bg" cx="50" cy="50" r="45"></circle>
                        <circle
                            className="progress-ring"
                            cx="50"
                            cy="50"
                            r="45"
                            strokeDasharray="283"
                            strokeDashoffset={dashoffset}
                        ></circle>
                    </svg>
                    <div className="progress-percent-large">{percent}%</div>
                </div>
                <div className="progress-details">
                    <h4>Topic Progress</h4>
                    <div className="progress-stats">
                        <div className="stat-item">
                            <div className="stat-value">{done}</div>
                            <div className="stat-label">Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">{total}</div>
                            <div className="stat-label">Total</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">{total - done}</div>
                            <div className="stat-label">Remaining</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subtopics-section">
                <input
                    type="text"
                    placeholder="Search subtopics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginBottom: '12px',
                        borderRadius: '8px',
                        border: '1px solid #ccc'
                    }}
                />
                <div className="section-header">
                    <h3><FaListCheck /> Subtopics</h3>
                    <button className="toggle-all-btn" onClick={onToggleAllSubtopics}>
                        Toggle All
                    </button>
                </div>
                <div className="subtopics-grid">
                    {filteredSubtopics.map((subtopic, index) => {
                        const key = `${currentPhase.id}_${index}`;
                        const isChecked = progressData[key] ? true : false;
                        const time = timeEstimates[subtopic] || "?";

                        return (
                            <SubtopicCard
                                key={key}
                                id={key}
                                subtopic={subtopic}
                                isChecked={isChecked}
                                time={time}
                                difficulty={progressData[key]?.difficulty}
                                onToggleProgress={onToggleProgress}
                                onRateDifficulty={onRateDifficulty}
                                onShowResources={onShowResources}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopicContent;
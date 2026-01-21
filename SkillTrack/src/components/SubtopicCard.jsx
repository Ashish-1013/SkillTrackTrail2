import React from 'react';
import { FaLink, FaStar } from 'react-icons/fa';

const SubtopicCard = ({
    id,
    subtopic,
    isChecked,
    time,
    difficulty,
    onToggleProgress,
    onRateDifficulty,
    onShowResources
}) => {
    const handleRate = (rating) => {
        onRateDifficulty(id, rating);
    };

    return (
        <div className={`subtopic-card ${isChecked ? 'completed' : ''}`}>
            <div className="subtopic-check">
                <input
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={(e) => onToggleProgress(id, e.target.checked)}
                />
                <div className="subtopic-title">{subtopic}</div>
            </div>
            <div className="subtopic-time">{time}</div>
            <div className="subtopic-resources">
                <a href="#" onClick={() => onShowResources(subtopic)} title="Resources">
                    <FaLink />
                </a>
            </div>
            <div className="difficulty-rating">
                <span>Difficulty: </span>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <FaStar
                            key={rating}
                            className={difficulty >= rating ? 'active' : ''}
                            onClick={() => handleRate(rating)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubtopicCard;
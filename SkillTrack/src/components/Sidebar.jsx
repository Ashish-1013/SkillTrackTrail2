import React from 'react';
import { syllabus, topics } from '../data/constants';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaLeaf, FaGraduationCap } from 'react-icons/fa';

const iconMap = {
    'fab fa-html5': <FaHtml5 />,
    'fab fa-css3-alt': <FaCss3Alt />,
    'fab fa-js-square': <FaJsSquare />,
    'fab fa-react': <FaReact />,
    'fab fa-node-js': <FaNodeJs />,
    'fas fa-database': <FaDatabase />,
    'fas fa-leaf': <FaLeaf />,
    'fas fa-graduation-cap': <FaGraduationCap />
};

const Sidebar = ({ currentPhase, onSelectPhase, progressData, overallProgress }) => {
    const getPhaseProgress = (phaseId) => {
        const total = topics[phaseId]?.subs.length || 0;
        let done = 0;
        if (topics[phaseId]) {
            topics[phaseId].subs.forEach((sub, index) => {
                const key = `${phaseId}_${index}`;
                if (progressData[key]) done++;
            });
        }
        return total > 0 ? Math.round((done / total) * 100) : 0;
    };

    return (
        <aside className="sidebar">
            <div className="progress-widget">
                <h3>Overall Progress</h3>
                <div className="progress-percent">{overallProgress}%</div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${overallProgress}%` }}></div>
                </div>
            </div>
            <div className="phase-list">
                {syllabus.map((section) => {
                    const progress = getPhaseProgress(section.id);
                    const Icon = iconMap[section.icon] || FaGraduationCap;
                    
                    return (
                        <div
                            key={section.id}
                            className={`phase-item ${currentPhase?.id === section.id ? 'active' : ''}`}
                            onClick={() => onSelectPhase(section)}
                        >
                            <div className="phase-icon" style={{ background: section.color }}>
                                <Icon />
                            </div>
                            <div className="phase-content">
                                <div className="phase-title">{section.phase}</div>
                            </div>
                            <div className="phase-progress">{progress}%</div>
                        </div>
                    );
                })}
            </div>
        </aside>
    );
};

export default Sidebar;
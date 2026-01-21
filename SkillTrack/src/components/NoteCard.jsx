import React from 'react';
import { FaTrash } from 'react-icons/fa';

const NoteCard = ({ note, onUpdateNote, onDeleteNote }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    };

    const handleTextChange = (e) => {
        onUpdateNote(note.id, e.target.value);
    };

    return (
        <div className="note-card">
            <div className="note-pin"></div>
            <textarea
                className="note-text"
                value={note.text}
                onChange={handleTextChange}
                placeholder="Write your note..."
            />
            <div className="note-footer">
                <div className="note-date">{formatDate(note.createdAt)}</div>
                <div className="note-actions">
                    <button className="note-btn" onClick={() => onDeleteNote(note.id)} title="Delete">
                        <FaTrash />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
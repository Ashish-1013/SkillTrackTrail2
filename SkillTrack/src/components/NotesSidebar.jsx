import React, { useState } from 'react';
import NoteCard from './NoteCard';
import { FaStickyNote, FaPlus } from 'react-icons/fa';

const NotesSidebar = ({ notes, onAddNote, onUpdateNote, onDeleteNote }) => {
    const [newNoteText, setNewNoteText] = useState('');

    const handleAddNote = () => {
        if (newNoteText.trim()) {
            onAddNote(newNoteText);
            setNewNoteText('');
        }
    };

    return (
        <div className="notes-sidebar">
            <div className="notes-header">
                <h3><FaStickyNote /> Notes</h3>
                <button className="add-note-btn" onClick={handleAddNote}>
                    <FaPlus /> Add
                </button>
            </div>
            <div className="notes-container">
                {notes.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                        No notes yet. Add your first note!
                    </div>
                ) : (
                    notes.map((note) => (
                        <NoteCard
                            key={note.id}
                            note={note}
                            onUpdateNote={onUpdateNote}
                            onDeleteNote={onDeleteNote}
                        />
                    ))
                )}
            </div>
            <textarea
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="Type your note here..."
                style={{
                    width: '100%',
                    marginTop: '10px',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-light)',
                    resize: 'vertical'
                }}
                rows="3"
            />
        </div>
    );
};

export default NotesSidebar;
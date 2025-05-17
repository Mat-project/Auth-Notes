import React, { useState } from "react";
import "../styles/Note.css"

function Note({note, onDelete, onUpdate}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedContent, setEditedContent] = useState(note.content);
    const formatedDate = new Date(note.created_at).toLocaleDateString("en-us");
    
    const handleEdit = () => {
        setIsEditing(true);
    };
    
    const handleCancel = () => {
        setIsEditing(false);
        setEditedTitle(note.title);
        setEditedContent(note.content);
    };
    
    const handleSave = () => {
        onUpdate(note.id, {
            title: editedTitle,
            content: editedContent
        });
        setIsEditing(false);
    };
    
    return (
        <div className="note-container">
            {isEditing ? (
                <div className="note-edit-form">
                    <input
                        type="text"
                        className="note-edit-title"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <textarea
                        className="note-edit-content"
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                    ></textarea>
                    <div className="note-edit-buttons">
                        <button className="save-button" onClick={handleSave}>Save</button>
                        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <>
                    <p className="note-title">{note.title}</p>
                    <p className="note-content">{note.content}</p>
                    <p className="note-date">{formatedDate}</p>
                    <div className="note-buttons">
                        <button className="edit-button" onClick={handleEdit}>Edit</button>
                        <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Note
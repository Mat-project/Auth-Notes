import React from "react";
import "../styles/Note.css"
function Note({note,onDelete}){
    const formatedDate=new Date(note.created_at).toLocaleDateString("en-us")
    return (
    <div>
        <p className="note-title">{note.title}</p>
        <p className="note-content">{note.content}</p>
        <p className="note-date">{formatedDate}</p>
        <button className="delete-button" onClick={()=>onDelete(note.id)}>Delete</button>

    </div>
    )
}

export default Note
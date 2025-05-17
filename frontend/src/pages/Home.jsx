import React, { useEffect, useState } from 'react';
import api from "../api";
import Note from "../components/Note";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, []);

  const getNote = () => {
    api.get("/api/notes/")
      .then((res) => setNotes(res.data))
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api.delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNote();
      })
      .catch((error) => alert(error));
  };

  const updateNote = (id, updatedData) => {
    api.put(`/api/notes/update/${id}/`, updatedData)
      .then((res) => {
        if (res.status === 200) {
          alert("Note updated successfully!");
          getNote();
        } else {
          alert("Failed to update note.");
        }
      })
      .catch((error) => {
        console.error("Error updating note:", error);
        alert("Error updating note: " + JSON.stringify(error.response?.data || error.message));
      });
  };

  const createNote = (e) => {
    e.preventDefault();
    const noteData = {
      content: content,
      title: title,
    };
    api.post("/api/notes/", noteData)
      .then((res) => {
        if (res.status === 201) {
          alert("Note created!");
          setContent(""); // Clear content
          setTitle(""); // Clear title
          getNote();
        } else {
          alert("Failed to make note.");
        }
      })
      .catch((err) => {
        console.error("Error creating note:", err.response.data);
        alert("Error creating note: " + JSON.stringify(err.response.data));
      });
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="home-container">
      <header className="app-header">
        <h1>My Notes</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
      
      <div className="notes-section">
        <h2>Your Notes</h2>
        {notes.length === 0 ? (
          <div className="no-notes-message">
            <p>You don't have any notes yet. Create one below!</p>
          </div>
        ) : (
          notes.map((note) => (
            <Note
              note={note}
              onDelete={deleteNote}
              onUpdate={updateNote}
              key={note.id}
            />
          ))
        )}
      </div>
      
      <div className="create-note-section">
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter a title for your note"
          />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note here..."
          ></textarea>
          <input type="submit" value="Save Note"></input>
        </form>
      </div>
    </div>
  );
};

export default Home;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context/NoteContext.jsx";

export default function NoteEditor() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 
    const [content, setContent] = useState(""); 
    const {addNote} = useNotes();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const newNote = {
            title: title, 
            description: description, 
            content: content
        };

        addNote(newNote);
        navigate("/notes");
    }

    return (
        <div>
            <h2>Create new note</h2>
            <form onSubmit={handleSubmit}>
            <div > 
                <label>Title</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}  
                />
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text"
                    value={description}
                    onChange ={(e) => setDescription(e.target.value)}
                    />
            </div>
            <div>
                <label>Content</label>
                <textarea 
                    value={content}
                    onChange ={(e) => setContent(e.target.value)}
                    />
            </div>
            <button type="submit">Create Note</button>
        </form>
        </div>
    );
}
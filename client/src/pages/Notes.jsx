import { useEffect, useState } from "react";
import {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
} from "../services/noteService";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!topic || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editId) {
        await updateNote(editId, {
          topic,
          content,
        });

        alert("Note Updated Successfully");
      } else {
        await addNote({
          user: user.id,
          topic,
          content,
        });

        alert("Note Added Successfully");
      }

      setTopic("");
      setContent("");
      setEditId(null);

      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (note) => {
    setTopic(note.topic);
    setContent(note.content);
    setEditId(note._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notes</h2>

      <input
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <br /><br />

      <textarea
        rows="5"
        cols="50"
        placeholder="Enter Note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        {editId ? "Update Note" : "Add Note"}
      </button>

      <hr />

      {notes.length === 0 ? (
        <p>No Notes Found</p>
      ) : (
        notes.map((note) => (
          <div
            key={note._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{note.topic}</h3>

            <p>{note.content}</p>

            <button onClick={() => handleEdit(note)}>
              Edit
            </button>

            {" "}

            <button onClick={() => handleDelete(note._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Notes;
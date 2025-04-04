import React from "react";
import { useState } from "react";
import Note from "./Note";

const AddNote = ({ notes, setNotes, NoteService }) => {
  const [newNote, setNewNote] = useState("");

  const insertNote = (event) => {
    event.preventDefault();
    alert("Add new note in database....");
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    NoteService.create(noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response));
      setNewNote("");
    });
  };

  const getNote = (event) => {
    setNewNote(event.target.value);
  };

  const toggleImportance = (id) => {
    alert("Change important for note...");
    const note = notes.find((n) => n.id === id);
    const changeNote = { ...note, important: !note.important };

    NoteService.update(id, changeNote).then((response) => {
      console.log(response);
      setNotes(notes.map((note) => (note.id !== id ? note : response)));
    })
    .catch(error => {
      console.log(error)
      alert(`the note ${note.content} was already deleted from server`)
      setNotes(notes.filter(n=> n.id !== id))
    });
  };

  return (
    <div>
      <h1>Operations</h1>
      <div>
        <form onSubmit={insertNote}>
          <legend>Create</legend>
          <p>
            Name
            <input value={newNote} onChange={getNote} />
          </p>
          <button type="submit">save note</button>
        </form>
      </div>
      <br />
      <div>
        <form>
          <legend>Update</legend>
          <table>
            <tbody>
              {notes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Note
                      note={item}
                      toggleImportance={() => toggleImportance(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

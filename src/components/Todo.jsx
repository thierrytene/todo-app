import React from 'react'
import { useContext } from 'react';
import { NoteContext } from '../Context/NoteContext';

function Todo({note}) {
  const {delNote, completedNote} = useContext(NoteContext)
  return (
    <div className={note.completed ? "todo completed" : "todo"}>
      <div className="todo-content">
        <p>{note.content}</p>
        <p className="sub-text">Ajouter le: {note.date}</p>
      </div>
      <div className="todo-btn">
        <button className="ok" onClick={() => completedNote(note.id)}>
          Effectuer
        </button>
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => delNote(note)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo
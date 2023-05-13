import React from "react";
import { useContext } from "react";
import { NoteContext } from "../Context/NoteContext";
import Todo from "./Todo";

function Todos() {

  const {notes} = useContext(NoteContext);
  const endTodos = notes.filter(note => note.completed == true).length
  let elementNote = notes.map(note => <Todo note={note} key={note.id}/>)
  
  if(notes.length != 0){
    return <div className="todos">
      <div className="counter-end-todo">{endTodos}</div>
      {elementNote}
    </div>
  } else {
    return ( <div className="no-data"> Rien de prevue ajourd'hui, ajouter une tâche </div> )
  }
}

export default Todos;

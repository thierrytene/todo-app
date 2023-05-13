import { useState } from "react";
import { NoteContext } from "../Context/NoteContext";

function NoteProvider({children}) {
  const [notes, setNotes] = useState([]);

  const addNote = (item) => {
    let data = notes;
    data = [item, ...data];
    setNotes(data);
  };

  const delNote = (item)=> {
    let data = notes 
    data = data.filter(note => note.id != item.id)
    setNotes(data)
  }

  const updateNote = (item)=>{
    let data = notes 
    let delItem = data.filter(note => note.id == item.id)[0]
    let indexItem = data.indexOf(delItem);
    data[indexItem] = item
    setNotes(data)
  }
  const completedNote = (id) => {
    let data = notes;
    let delItem = data.filter((note) => note.id == id)[0];
    let indexItem = data.indexOf(delItem);
    
    console.log("Before:",delItem);
    data[indexItem].completed = true
    console.log("After:",data);
    setNotes(data);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote: (note) => addNote(note),
        delNote: (note) => delNote(note),
        updateNote: (note) => updateNote(note),
        completedNote: (id) => completedNote(id),
      }}>
      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;

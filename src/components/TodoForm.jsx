import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { NoteContext } from "../Context/NoteContext";
import { useState } from "react";

function TodoForm() {
  const { addNote } = useContext(NoteContext);
  const [errorNote, setError] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let date = new Date()
    date = date.toLocaleDateString().replace("/", "-").replace("/", "-");
    if (formData.get("note") != "") {
      let note = {
        id: uuidv4(),
        content: formData.get("note"),
        completed: false,
        date
      };
      addNote(note);
      e.target.reset();
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <input
          type="text"
          name="note"
          placeholder="Ajouter un element a la liste"
          className={errorNote ? "form-control error" : "form-control"}
        />
        <button type="submit">Ajouter</button>
      </div>
    </form>
  );
}

export default TodoForm;

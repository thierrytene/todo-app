import { useContext } from "react";
import { NoteContext } from "../Context/NoteContext";

function updateForm() {
  const {updateNote} = useContext(NoteContext);
  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let note = {
      id: uuidv4(),
      content: formData.get("note"),
      completed: false,
    };
    updateNote(note);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <input
          type="text"
          name="note"
          value={note.content}
          placeholder="Ajouter un element a la liste"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button type="submit">Mise a jour</button>
      </div>
    </form>
  );
}

export default updateForm;

import NoteCard from "../components/NoteCard";
import { notesArray } from "../context/NoteContext";

export default function Notes() {
  return (
    <div>
      <h2>Notes</h2>
      <div className="grid grid-cols-3 gap-4">
        {notesArray.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

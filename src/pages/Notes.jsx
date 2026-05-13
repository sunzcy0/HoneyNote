import NoteCard from "../components/NoteCard";
import { useNotes } from "../context/NoteContext";

export default function Notes() {
  const { notes } = useNotes();
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>  
  );
}

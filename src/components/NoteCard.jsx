function NoteCard({note}) {
  return (
    <div className="border rounded shadow-sm p-4">
      <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{note.description}</p>
      <p className="text-sm text-gray-600">{note.content}</p>
    </div>
  )
}

export default NoteCard
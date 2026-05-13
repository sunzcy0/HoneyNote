import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export const useNotes = () => useContext(NoteContext);

export const NoteProvider = ({children}) => { 
  const [notes, setNotes] = useState([
    {
      id: 1, 
      title: "First note",
      description: "First note description",
      content: "This is the content of the first note.",
      createdAt: new Date().toISOString(),
      favorite: false
    }
  ]);

  const addNote = (newNote) => {
    const noteWithMetaData = {
      ...newNote, 
      id: Date.now(),
      createdAt: new Date().toISOString(),
      favorite: false
    }

    setNotes([...notes, noteWithMetaData]);
  };

  return (
    <NoteContext.Provider value={{notes, addNote}}>
      {children}
    </NoteContext.Provider>
  );
};


import { createContext, useContext, useState, useEffect } from "react";

const NoteContext = createContext();

export const useNotes = () => useContext(NoteContext);

export const NoteProvider = ({children}) => { 
  const [notes, setNotes] = useState(() => {

  const notesStorage = localStorage.getItem("notes");
  
    if (notesStorage) {
      return JSON.parse(notesStorage);
    }
    return [];
  });


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


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

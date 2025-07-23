import { createContext, useContext, useMemo } from "react";

export const NoteContext = createContext(null);

export function useNotes() {
  return useContext(NoteContext);
}

export default function NoteProvider({
  children,
  notes,
  handlers: {
    addNote,
    removeNote,
    completeNote,
    editNote,
    sortNotes,
  },
})

{
  const value = useMemo(
    () => ({
      notes,
      addNote,
      removeNote,
      completeNote,
      editNote,
      sortNotes,
    }),
    [notes, addNote, removeNote, completeNote, editNote, sortNotes]
  );

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
}

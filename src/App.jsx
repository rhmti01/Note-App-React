import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx"
import NoteHeader from "./components/NoteHeader.jsx";
import "/src/App.css";
import "/src/index.css";


function App() {

  // used states
  const [sortBy, setSortBy] = useState(() => {
    const savedSortBy = localStorage.getItem("sortBy")
    return savedSortBy ? savedSortBy : "latest"
  })
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // push new notes to the notes state
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  // remove notes  based on object filter
  const handleRemoveNote = (removedNoteId) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((cmp) => cmp.id !== removedNoteId);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  // toggle notes completion  
  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  // sort notes based on sortBy
  const handleSortNotes = () => {
    let sortedNotes = [...notes]

    switch (sortBy) {
      case "latest":
        sortedNotes = sortedNotes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break;
      case "earliest":
        sortedNotes = sortedNotes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        break;
      case "completed":
        sortedNotes = sortedNotes.sort((a, b) => Number(b.completed) - (Number(a.completed)))
    }
    
    return sortedNotes
  }

  // save selected sort
  const handleSortChange = (e) => {
    const newSortBy = e.target.value
    setSortBy(newSortBy)
    localStorage.setItem("sortBy", newSortBy)
  }

  return (
    <div className=" w-full max-w-screen-xl flex items-center flex-col  " >
      <NoteHeader
        sortBy={sortBy}
        onSortNotes={handleSortChange} />
      <div className=" flex items-start justify-around w-full bg-yellow-50/ mt-10 ">
        <AddNewNote onAddNote={handleAddNote} />
        <div className=" basis-[50%] bg-slate-30   w-full  my-3  " >
          <NoteStatus notes={notes} />
          <NoteList
            sortedNotes={handleSortNotes()}
            onRemoveNote={handleRemoveNote}
            onCompleteNote={handleCompleteNote} />
        </div>
      </div>
    </div>
  )
}

export default App;

import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx"
import "/src/App.css";
import "/src/index.css";
function App() {
  const [notes, setNotes] = useState([])

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote])
  }

  const handleRemoveNote = (removedNoteId) => {
    setNotes((prevNotes) => prevNotes.filter((cmp) => cmp.id != removedNoteId))
  }

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value)
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note))
  }

  return (
    <div className=" w-full max-w-screen-xl flex items-center flex-col  " >
      {/* note header */}
      <div className=" w-full h-16 bg-lime-50 rounded-lg flex items-center justify-center font-bold text-2xl " >Note Header</div>
      <div className=" flex items-start justify-around w-full bg-yellow-100/ ">
        <AddNewNote onAddNote={handleAddNote} />
        <div className=" basis-[50%] bg-slate-30   w-full  my-3  " >
          <NoteStatus notes={notes} />
          <NoteList notes={notes} onRemoveNote={handleRemoveNote} onCompleteNote={handleCompleteNote} />
        </div>
      </div>
    </div>
  )
}

export default App;

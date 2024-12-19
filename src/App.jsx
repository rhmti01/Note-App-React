import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
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

  return (
    <div className=" w-full max-w-screen-xl flex items-center flex-col  " >
      {/* note header */}
      <div className=" w-full h-16 bg-lime-50 rounded-lg " >note header</div>
      <div className=" flex items-start justify-around w-full bg-yellow-100/ ">
        <AddNewNote onAddNote={handleAddNote} />
        <NoteList notes={notes} onRemoveNote={handleRemoveNote} />
      </div>
    </div>
  )
}

export default App;

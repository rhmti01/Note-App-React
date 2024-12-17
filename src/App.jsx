import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import "/src/App.css";
import "/src/index.css";
function App() {
  const [notes, setNotes] = useState([ ])

  const handleAddNote = (newNote) => {
    setNotes((prevNotes)=> [...prevNotes , newNote])
  }

  return (
    <div className=" w-full max-w-screen-xl flex items-center flex-col  " >
      {/* note header */}
      Note Header
      <div className=" flex items-center justify-around w-full bg-yellow-100/ ">
        <AddNewNote onAddNote={handleAddNote} />
        <NoteList  notes={notes} />
      </div>
    </div>
  )
}

export default App;

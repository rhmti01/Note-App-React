import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import ModalOnEdit from "./components/ModalOnEdit.jsx";
import "/src/index.css";
import "/src/App.css";
import useLocalStorageReducer from "./hooks/useLocalStorageReducer.js";
import useLocalStorageState from "./hooks/useLocalStorageState.js";
import { Toaster } from "react-hot-toast";
import useNoteNotification from "./hooks/useNoteNotification.js";

// Reducer function for handling note actions
function notesReducer(notes, action) {
  switch (action.type) {
    case "add":
      return [...notes, action.payload];

    case "remove":
      return notes.filter((note) => note.id !== action.payload);

    case "complete":
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );

    case "edit":
      return notes.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.updatedTitle,
              description: action.payload.updatedDescription,
            }
          : note
      );

    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function App() {
  const [notes, dispatch] = useLocalStorageReducer("notes", notesReducer, []);

  const [sortBy, setSortBy] = useLocalStorageState("sortBy", "latest");

  const [editModal, setModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
    useNoteNotification("success");
  };

  const handleRemoveNote = (removedNoteId) => {
    dispatch({ type: "remove", payload: removedNoteId });
    useNoteNotification("remove");
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    const completedNote = notes.find((note) => note.id === noteId);
    dispatch({ type: "complete", payload: noteId });
    if (!completedNote.completed) {
      useNoteNotification("complete");
    }
  };

  const handleEditNote = (editableNoteId) => {
    const note = notes.find((n) => n.id === editableNoteId);
    if (note && !note.completed) {
      setSelectedNote(note);
      setModal(true);
    }
  };

  const recordEditNote = (noteId, updatedTitle, updatedDescription) => {
    dispatch({
      type: "edit",
      payload: { id: noteId, updatedTitle, updatedDescription },
    });
    useNoteNotification("edit");

    setModal(false);
    setSelectedNote(null);
  };

  const handleSortNotes = () => {
    let sortedNotes = [...notes];
    switch (sortBy) {
      case "latest":
        return sortedNotes.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "earliest":
        return sortedNotes.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      case "completed":
        return sortedNotes.sort(
          (a, b) => Number(b.completed) - Number(a.completed)
        );
      default:
        return sortedNotes;
    }
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
  };

  return (
    <div className="w-full 2xl:max-w-[1280px] xl:max-w-[1100px] flex items-center flex-col xg:pb-24 mm:pb-20 ss:pb-10">
      <Toaster />
      {editModal && selectedNote && (
        <ModalOnEdit
          note={selectedNote}
          setModal={setModal}
          recordEditNote={recordEditNote}
        />
      )}
      <NoteHeader sortBy={sortBy} onSortNotes={handleSortChange} />
      <div className="flex xx:items-start ss:items-center gap-y-9 justify-evenly xx:flex-row ss:flex-col w-full">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="xg:basis-[47%] xx:basis-[50%] xx:w-full mm:w-[470px] ss:w-[90%] my-3">
          <NoteStatus notes={notes} />
          <NoteList
            sortedNotes={handleSortNotes()}
            onRemoveNote={handleRemoveNote}
            onCompleteNote={handleCompleteNote}
            onEditNote={handleEditNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

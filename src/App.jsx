import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";
import ModalOnEdit from "./components/ModalOnEdit.jsx";
import "/src/index.css";
import "/src/App.css";
import useLocalStorageState from "./hooks/useLocalStorageState.js";
import { Toaster } from "react-hot-toast";
import useNoteNotification from "./hooks/useNoteNotification.js";
import ModalOnRemove from "./components/ModalOnRemove.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  editTodo,
  removeTodo,
} from "./features/todo/todoSlice.js";
import useSyncTodosToLocalStorage from "./hooks/useSyncTodosToLocalStorage.js";
import NoteBody from "./components/NoteBody.jsx";
import NoteProvider from "./context/NoteContext.jsx";
import { NoteDirProvider } from "./context/NoteDirContext.jsx";

function App() {
  useSyncTodosToLocalStorage();
  const { todos: notes } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [sortBy, setSortBy] = useLocalStorageState("sortBy", "latest");

  const [editModal, setEditModal] = useState(false);
  const [selectEditNote, setEditeNote] = useState(null);

  const [removeModal, setRemoveModal] = useState(false);
  const [selectRemoveNote, setRemoveNote] = useState(null);

  const handleAddNote = (newNote) => {
    dispatch(addTodo(newNote));
    useNoteNotification("success");
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    const completedNote = notes.find((note) => note.id === noteId);
    dispatch(completeTodo(noteId));
    if (!completedNote.completed) {
      useNoteNotification("complete");
    }
  };

  const handleRemoveNote = (removedNoteId) => {
    const note = notes.find((n) => n.id === removedNoteId);
    if (note) {
      setRemoveNote(note);
      setRemoveModal(true);
    }
  };

  const handleEditNote = (editableNoteId) => {
    const note = notes.find((n) => n.id === editableNoteId);
    if (note && !note.completed) {
      setEditeNote(note);
      setEditModal(true);
    }
  };

  const recoredRemoveNote = () => {
    dispatch(removeTodo(selectRemoveNote.id));
    useNoteNotification("remove");

    setRemoveModal(false);
    setRemoveNote(null);
  };

  const recordEditNote = (
    noteId,
    updatedTitle,
    updatedDescription,
    updatedPriority
  ) => {
    dispatch(
      editTodo({
        id: noteId,
        updatedTitle,
        updatedDescription,
        updatedPriority,
      })
    );
    useNoteNotification("edit");

    setEditModal(false);
    setEditeNote(null);
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

  const noteHandlers = {
    addNote: handleAddNote,
    removeNote: handleRemoveNote,
    completeNote: handleCompleteNote,
    editNote: handleEditNote,
    sortNotes: handleSortNotes,
  };

  return (
    <NoteProvider notes={notes} handlers={noteHandlers}>
      <NoteDirProvider>
        <div className="w-full 2xl:max-w-[1280px] xl:max-w-[1100px] flex items-center flex-col xg:pb-24 mm:pb-20 ss:pb-10">
          <Toaster />
          {editModal && selectEditNote && (
            <ModalOnEdit
              note={selectEditNote}
              setEditModal={setEditModal}
              recordEditNote={recordEditNote}
            />
          )}
          {removeModal && selectRemoveNote && (
            <ModalOnRemove
              setRemoveModal={setRemoveModal}
              note={selectRemoveNote}
              recoredRemoveNote={recoredRemoveNote}
            />
          )}
          <NoteHeader sortBy={sortBy} onSortNotes={handleSortChange} />
          <NoteBody />
        </div>
      </NoteDirProvider>
    </NoteProvider>
  );
}

export default App;

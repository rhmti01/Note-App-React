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

  return (
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

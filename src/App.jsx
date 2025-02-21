import { useState } from "react";
import AddNewNote from "./components/AddNewNote.jsx";
import NoteList from "./components/NoteList.jsx";
import NoteStatus from "./components/NoteStatus.jsx"
import NoteHeader from "./components/NoteHeader.jsx";
import "/src/index.css";
import "/src/App.css";


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
  const [editModal, setModal] = useState(false)
  const [noteToEdit, setNoteToEdit] = useState({})

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

  // edit note by new value
  const handleEditNote = (editableNoteId) => {
    // console.log(editableNoteId);
    const editNote = notes.find((note) => note.id == editableNoteId)
    if (editNote && !editNote.completed) {
      setNoteToEdit(editNote);
      setModal(true);
    }
  }

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

  const handleEdit = (noteId) => {
    const titleValue = document.querySelector("#title").value
    const descriptionValue = document.querySelector("#description").value
    // console.log(titleValue, descriptionValue);
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) =>
        note.id === noteId ? { ...note, title:titleValue , description : descriptionValue } : note);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    setModal(!editModal)
  }

  return (
    <div className=" w-full 2xl:max-w-[1280px] xl:max-w-[1100px]  flex items-center flex-col xg:pb-24 mm:pb-20 ss:pb-10 " >
      <ModalOnEdit note={noteToEdit} editModal={editModal} handleEdit={handleEdit} />
      <NoteHeader
        sortBy={sortBy}
        onSortNotes={handleSortChange} />
      <div className=" flex xx:items-start ss:items-center xx:gap-y-0 gap-y-9 justify-evenly xx:flex-row ss:flex-col  w-full bg-yellow-50/ 2xl:mt-2 xl:mt-1  ">
        <AddNewNote onAddNote={handleAddNote} />
        <div className=" xg:basis-[47%] xx:basis-[50%] xx:w-full  mm:w-[470px] ss:w-[90%] bg-slate-30 w-full my-3  " >
          <NoteStatus notes={notes} />
          <NoteList
            sortedNotes={handleSortNotes()}
            onRemoveNote={handleRemoveNote}
            onCompleteNote={handleCompleteNote}
            onEditNote={handleEditNote} />
        </div>
      </div>
    </div>
  )
}

export default App;







//  modal on the webpage with javascript  
function ModalOnEdit({ note, editModal, handleEdit }) {
  return (
    <div className={`   ${editModal ? "block" : "hidden"}   `}  >
      <div onClick={() => handleEdit(note.id)} class="  cursor-pointer  inset-0 absolute z-20 w-full h-screen bg-stone-900/40 backdrop-blur-md  "></div>
      <div class=" scale-[83%]  z-40 absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2    ">
        <div
          class="block border-2 border-stone-200  font-inter bg-white px-3 py-3 w-[330px] md:py-4 md:px-3  md:justify-between  md:w-[420px]  rounded-2xl ">
          <div class=" flex items-center justify-between w-full py-2 bg-slate-400/  ">
            <div></div>
            <h2 class=" font-semibold text-[25px]  md:text-[27px] text-slate-900 ">Edit Todo</h2>
            <svg onClick={() => handleEdit(note.id)} class=" cursor-pointer w-6 h-6 md:w-7 md:h-7 stroke-red-500  cancelBtn  " xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke-width="4" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
          <span class="block w-[97%] mx-auto h-[2px] bg-slate-200 mt-1 md:mt-3 "></span>
          <h1 class=" font-semibold text-[23.5px] md:text-[25px] text-slate-700 text-left mt-7 md:mt-12 ml-5  ss:ml-4  ">Title</h1>
          <div class=" flex justify-center " >
            <input id="title" autofocus="autofocus" defaultValue={note.title}
              class=" border-2  border-stone-300 mx-auto w-[280px] ss:w-[290px] md:w-[360px] px-2 md:px-4 my-3 py-2.5 rounded-xl outline-none focus:shadow-lg  focus:border-blue-600 "
              type="text" />
          </div>
          <h1 class=" font-semibold text-[23.5px] md:text-[25px] text-slate-700 text-left mt-0 ml-5  ss:ml-4  ">Description</h1>
          <div class=" flex justify-center " >
            <input id="description" autofocus="autofocus" defaultValue={note.description}
              class=" border-2  border-stone-300 mx-auto w-[280px] ss:w-[290px] md:w-[360px] px-2 md:px-4 my-3 py-2.5 rounded-xl outline-none focus:shadow-lg  focus:border-blue-600 "
              type="text" />
          </div>
          <div class=" flex justify-evenly items-center mt-7 ss:mt-10 md:mt-14 mb-2 " >
            <span onClick={() => handleEdit(note.id)} class="confirmBtn px-9 md:px-11 py-1.5  rounded-xl md:text-[17px]  bg-blue-600 text-white cursor-pointer border-blue-600 border-2 " >Confirm</span>
            <span onClick={() => handleEdit(note.id)} class="cancelBtn px-9 md:px-12 py-1.5 rounded-xl md:text-[17px]   text-blue-600 bg-white border-blue-400 border-2 cursor-pointer " >Cancel</span>
          </div>
        </div>
      </div>
    </div >
  )
}



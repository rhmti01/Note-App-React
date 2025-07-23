import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
import NoteStatus from "./NoteStatus";
import { useNotes } from "../context/NoteContext.jsx";

function NoteBody() {
  const { notes, addNote, removeNote, completeNote, editNote, sortNotes } = useNotes();

  return (
    <div className="flex xx:items-start ss:items-center gap-y-9 justify-evenly xx:flex-row ss:flex-col w-full">
      <AddNewNote onAddNote={addNote} />
      <div className="xg:basis-[47%] xx:basis-[50%] xx:w-full mm:w-[470px] ss:w-[90%] my-3">
        <NoteStatus notes={notes} />
        <NoteList
          sortedNotes={sortNotes()}
          onRemoveNote={removeNote}
          onCompleteNote={completeNote}
          onEditNote={editNote}
        />
      </div>
    </div>
  );
}

export default NoteBody;
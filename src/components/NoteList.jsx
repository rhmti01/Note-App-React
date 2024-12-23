import NoteItem from "./NoteItem"

function NoteList({ sortedNotes, onRemoveNote, onCompleteNote }) {
  return (
    <div className="  bg-black/ px-3 w-full h-auto flex items-center justify-start  flex-col mt-6 max-h-[480px] overflow-y-auto  " >
      {sortedNotes.map((note) =>
      (<NoteItem
        key={note.id}
        note={note}
        onRemoveNote={onRemoveNote}
        onCompleteNote={onCompleteNote} />))}
    </div>
  )
}
export default NoteList



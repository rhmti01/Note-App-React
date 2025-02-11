/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem.jsx"

function NoteList({ sortedNotes, onRemoveNote, onCompleteNote }) {
  return (
    <div className=" px-3 w-full h-auto flex items-center justify-start  flex-col  max-h-[480px] overflow-y-auto  " >
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



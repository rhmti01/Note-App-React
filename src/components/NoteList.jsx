/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem.jsx"

function NoteList({ sortedNotes, onRemoveNote, onCompleteNote , onEditNote }) {
  return (
    <div className=" px-3 w-full h-auto flex items-center justify-start  flex-col  max-h-[480px] overflow-y-auto  dark:[&::-webkit-scrollbar-track]:bg-neutral-200  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 " >
      {sortedNotes.map((note) =>
      (<NoteItem
        key={note.id}
        note={note}
        onRemoveNote={onRemoveNote}
        onCompleteNote={onCompleteNote}
        onEditNote={onEditNote}  />))}
    </div>
  )
}
export default NoteList



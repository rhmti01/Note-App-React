import NoteItem from "./NoteItem"

function NoteList({ sortedNotes, onRemoveNote, onCompleteNote }) {
  return (
    <div className=" px-3 w-full h-auto flex items-center justify-start  flex-col mt-5  max-h-[480px] overflow-y-auto mb-40 " >
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



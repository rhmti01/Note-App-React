function NoteList({ notes, onRemoveNote, onCompleteNote }) {
  return (
    <div className=" basis-[50%] bg-slate-30   w-full  my-3  " >
      <div>
        <ul className="flex justify-around items-center w-full shadow-sm rounded-lg my-3 py-1 mx-auto bg-neutral-100  bg-gradient-to-br from-gray-50 to-neutral-200 " >
          <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >All (3)</li>
          <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >Completed (2)</li>
          <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >Open (1) </li>
        </ul>
      </div>
      <div className="  bg-black/ px-3 w-full h-auto flex items-center justify-start  flex-col mt-6 max-h-[480px] overflow-y-auto  " >
        {
          notes.map((note) => (<NoteItem key={note.id} note={note} onRemoveNote={onRemoveNote} onCompleteNote={onCompleteNote} />))
        }
      </div>
    </div>
  )
}
export default NoteList


function NoteItem({ note, onRemoveNote, onCompleteNote }) {

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }
  // className={ `  ${note.completed ? "text-slate-500 " : "text-black"}  mt-4 font-bold text-zinc-900 text-lg   ` }
  return (
    <div className={`  ${note.completed ? "bg-slate-200 ring-1 ring-slate-300  " : "bg-white"}  w-full  my-2 rounded-2xl shadow-sm  ` }>
      <div className={ `  ${note.completed ? " drop-shadow-sm " : " "}  flex items-center justify-between w-full  ` } >
        <div className=" pl-5 basis-3/4 flex items-start justify-around flex-col ">
          <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-900"}  mt-4 font-bold  text-lg   `} >{note.title}</p>
          <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-400"}  mt-2  font-light  `}  >{note.description} </p>
        </div>
        <div className=" flex items-center justify-evenly basis-[15%]  ">
          <input
            checked={note.completed}
            onChange={onCompleteNote}
            value={note.id} id={note.id}
            type="checkbox" className="size-4 text-gray-500 bg-gray-100 rounded-md ring-1 ring-gray-500 cursor-pointer  focus:ring-zinc-500" />
          <svg
            onClick={() => onRemoveNote(note.id)}
            className=" cursor-pointer size-8 stroke-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
      <div className=" bg-slate-300 mt-3 mb-2 w-[94%] h-[1px] mx-auto " ></div>
      <p className={ `  ${note.completed ? "text-slate-600  " : "text-zinc-500"}   pl-5 pb-1  my-2 text-sm font-medium  ` } >{new Date(note.createdAt).toLocaleDateString('en-US', options)}</p>
    </div>
  )
}



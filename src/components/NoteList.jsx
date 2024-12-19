function NoteList({ notes }) {
  console.log(notes);
  return (
    <div className=" basis-[50%] bg-slate-300/ w-full h-96 my-3 " >
      <div>
        <ul className="flex justify-around items-center w-full shadow-sm rounded-lg my-3 py-1 mx-auto bg-neutral-100  bg-gradient-to-br from-gray-50 to-neutral-200 " >
          <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >All (2)</li>
          <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >Completed (3)</li>
          <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >Open (1) </li>
        </ul>
      </div>
      <div className="w-full  flex items-center justify-center flex-col mt-6 " >
        {
          notes.map((note) => (<NoteItem key={note.id} note={note} />))
        }
      </div>
    </div>
  )
}
export default NoteList


function NoteItem({ note }) {

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  }

  return (
    <div className="  w-full  mx-3 my-2 bg-white rounded-2xl shadow-sm  ">
      <div className=" flex items-center justify-between w-full " >
        <div className=" pl-5 basis-3/4 flex items-start justify-around flex-col ">
          <p className=" mt-4 font-bold text-zinc-900 text-lg " >{note.title}</p>
          <p className=" mt-2 text-zinc-400 font-light  " >{note.description} </p>
        </div>
        <div className=" flex items-center justify-evenly basis-[15%]  ">
          <input type="checkbox" className="size-4 text-gray-500 bg-gray-100 rounded-md ring-1 ring-gray-500 cursor-pointer  focus:ring-zinc-500" />
          <svg className=" cursor-pointer size-8 stroke-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
      </div>
      <div className=" bg-slate-300 mt-3 mb-2 w-[94%] h-[1px] mx-auto " ></div>
      <p className=" pl-5 pb-1  my-2 text-zinc-500 text-sm font-medium " >{new Date(note.createdAt).toLocaleDateString('en-US', options)}</p>
    </div>
  )
}



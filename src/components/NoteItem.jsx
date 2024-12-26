
function NoteItem({ note, onRemoveNote, onCompleteNote }) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    }

    return (
        <div className={`  ${note.completed ? "bg-zinc-200  ring-1 ring-slate-300  " : "bg-white"}  w-full  xg:my-2 xx:my-1.5 sm:my-1.5 rounded-2xl shadow-sm   `}>
            <div className={`  ${note.completed ? " drop-shadow-lg " : " "}  flex items-center justify-between w-full  `} >
                <div className=" 2xl:pl-5  xx:pl-[18px] sm:pl-3.5 basis-3/4 flex items-start justify-around flex-col ">
                    <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-900"}  xl:mt-4 xx:mt-3 sm:mt-2.5 2xl:text-lg xg:text-[17.5px] xx:text-[17.5px] sm:text-[16.6px] font-bold  text-lg   `} >{note.title}</p>
                    <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-400"}  2xl:text-base xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] sm:text-[15px] 2xl:mt-2 xl:mt-1.5 sm:mt-1  font-light  `}  >{note.description} </p>
                </div>
                <div className=" flex items-center justify-evenly basis-[15%]  xl:gap-x-0 xg:gap-x-1 sm:gap-x-2 sm:pr-2 xx:pr-0.5 ">
                    <input
                        checked={note.completed}
                        onChange={onCompleteNote}
                        value={note.id} id={note.id}
                        type="checkbox" className=" 2xl:size-4 xl:size-3.5 sm:size-3.5 text-gray-500 bg-gray-100 rounded-md ring-1 ring-gray-500 cursor-pointer  focus:ring-zinc-500" />
                    <svg
                        onClick={() => onRemoveNote(note.id)}
                        className=" cursor-pointer xl:size-8 sm:size-[32px] stroke-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
            <div className=" bg-slate-300 xl:mt-3 xx:mt-2 sm:mt-1.5 mb-2 w-[94%] h-[1px] mx-auto " ></div>
            <p className={`  ${note.completed ? "text-slate-600  " : "text-zinc-500"}  2xl:pl-5 xl:pl-4 xx:pl-4 sm:pl-3.5 pb-1  my-2 2xl:text-sm xl:text-[13.5px] xx:text-[13px] sm:text-[13px] font-medium  `} >
                {new Date(note.createdAt).toLocaleDateString('en-US', options)}
            </p>
        </div>
    )

}

export default NoteItem
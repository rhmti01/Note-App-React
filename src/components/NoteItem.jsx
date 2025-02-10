/* eslint-disable react/prop-types */

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
        <div className={`  ${note.completed ? "bg-zinc-200  ring-1 ring-slate-300  " : "bg-white"}  w-full  xg:my-2 xx:my-1.5 mm:my-1.5 ss:my-1 rounded-2xl shadow-mm   `}>
            <div className={`  ${note.completed ? " drop-shadow-lg " : " "}  flex items-center justify-between w-full  `} >
                <div className=" 2xl:pl-5  xx:pl-[18px] mm:pl-3.5 ss:pl-3 basis-3/4 flex items-start justify-around flex-col ">
                    <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-900"}  xl:mt-4 xx:mt-3 mm:mt-2.5 ss:mt-2 2xl:text-lg xg:text-[17.5px] xx:text-[17.5px] mm:text-[16.6px] ss:text-[16px] font-bold  text-lg   `} >{note.title}</p>
                    <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-400"}  2xl:text-base xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] mm:text-[15px] ss:text-[14.5px] 2xl:mt-2 xl:mt-1.5 ss:mt-1  font-light  ss:pr-7 mm:pr-0  `}  >{note.description} </p>
                </div>
                <div className=" flex items-center justify-evenly pt-3 basis-[15%]  xl:gap-x-0 xg:gap-x-1 mm:gap-x-2 ss:gap-x-2 mm:pr-2 ss:pr-2 xx:pr-0.5 ">
                    <input
                        checked={note.completed}
                        onChange={onCompleteNote}
                        value={note.id} id={note.id}
                        type="checkbox" className=" 2xl:size-6 xl:size-5.5 mm:size-5.5 ss:size-5.5  rounded-[10px] cursor-pointer  accent-gray-700 ring-1 outline-none ring-offset-0 " />
                    <svg
                        onClick={() => onRemoveNote(note.id)}
                        className=" cursor-pointer xl:size-8 mm:size-[32px] ss:size-[30px] stroke-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
            <div className=" bg-slate-300 xl:mt-3 xx:mt-2 mm:mt-1.5 ss:mt-1 mb-2 w-[94%] h-[1px] mx-auto " ></div>
            <p className={`  ${note.completed ? "text-slate-600  " : "text-zinc-500"}  2xl:pl-5 xl:pl-4 xx:pl-4 mm:pl-3.5 ss:pl-3  pb-1  my-2 2xl:text-sm xl:text-[13.5px] xx:text-[13px] mm:text-[13px] ss:text-[12.5px] font-medium  `} >
                {new Date(note.createdAt).toLocaleDateString('en-US', options)}
            </p>
        </div>
    )

}

export default NoteItem
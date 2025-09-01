/* eslint-disable react/prop-types */

import { useNoteDirContext } from "../context/NoteDirContext";

function NoteItem({ note, onRemoveNote, onCompleteNote , onEditNote }) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    }

    const priorityStyles = {
    optional: "bg-gray-200 dark:bg-gray-200 text-gray-700",
    normal: "bg-amber-100 dark:bg-amber-100 text-yellow-600",
    urgent: "bg-red-200 dark:bg-red-200 text-red-700",
    };

    const {dir} = useNoteDirContext()
    console.log(dir);

    return (
        <div className={`  ${note.completed ? " bg-zinc-200 dark:bg-gray-800  ring-1 ring-slate-300 dark:ring-0  " : "bg-white dark:bg-slate-900/50   "}    w-full max-w-[575px] xg:my-2 xx:my-1.5 mm:my-1.5 ss:my-1 rounded-2xl shadow-mm z-auto  `}>
            <div className={`  ${note.completed ? " drop-shadow-lg dark:drop-shadow-none " : " "} ${dir =="rtl" ? "flex-row-reverse " : ""} flex items-center justify-between w-full ss:pr-2 xx:pr-2  `} >
                <div className={`  ${dir =="rtl" ? "justify-around  2xl:pr-5  xx:pr-[18px] mm:pr-3.5 ss:pr-3 text-right " : " text-left justify-start 2xl:pl-5  xx:pl-[18px] mm:pl-3.5 ss:pl-3  "} basis-3/4 max-w-[75%] flex items-start  flex-col  ` }>
                    <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-900 dark:text-zinc-100 "} w-full xl:mt-4 xx:mt-3 mm:mt-2.5 ss:mt-2 2xl:text-lg xg:text-[17.5px] xx:text-[17.5px] mm:text-[16.6px] ss:text-[16px] font-bold  text-lg ss:pl-0 mm:pr-0 break-words text-wrap `} >{note.title}</p>
                    <p className={`  ${note.completed ? "text-slate-500 line-through " : "text-zinc-400 dark:text-zinc-300 "} w-full 2xl:text-base xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] mm:text-[15px] ss:text-[14.5px] 2xl:mt-2 xl:mt-1.5 ss:mt-1  font-light  ss:pr-0 mm:pr-0 break-words text-wrap `}  >{note.description} </p>
                </div>
                <div className={`  ${dir == "ltr" ? "" : "flex-row-reverse"} pl-2  flex items-center justify-around  pt-3 ss:basis-[22%] rr:basis-[20%] mm:basis-[19%] ww:basis-[23%] 2xl:basis-[21%] xl:gap-x-1 xg:gap-x-1 mm:gap-x-2 ss:gap-x-2   `}>
                    <div
                        onClick={() => onEditNote(note.id)}
                        className=" mx-1 2xl:size-6 xl:size-5.5 mm:size-5.5 ss:size-5.5  rounded-[9px] cursor-pointer  flex items-center justify-center  ring-[1.5px] outline-0 border-0 ring-offset-0 dark:ring-gray-300  ring-gray-600 " >
                        <svg stroke="currentColor" className="  dark:stroke-gray-300 stroke-gray-700  w-3.5 h-3.5  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"  >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </div>
                    <input
                        checked={note.completed}
                        onChange={onCompleteNote}
                        value={note.id} id={note.id}
                        type="checkbox" className=" 2xl:size-6 xl:size-5.5 mm:size-5.5 ss:size-5.5  rounded-[10px] cursor-pointer ring-gray-700 accent-gray-700 accent dark:bg-gray-500  ring-1 outline-0 border-0 ring-offset-0 " />
                    <svg
                        onClick={() => onRemoveNote(note.id)}
                        className=" cursor-pointer xl:size-8 mm:size-[32px] ss:size-[30px] stroke-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
            <div className=" bg-slate-300 dark:bg-slate-600 xl:mt-3 xx:mt-2 mm:mt-1.5 ss:mt-1 mb-2 w-[94%] h-[1px] mx-auto " ></div>
            <div className=" w-full flex justify-between  " >
                <p className={`  ${note.completed ? "text-slate-600  " : "text-zinc-500 dark:text-zinc-400 "}  2xl:pl-5 xl:pl-4 xx:pl-4 mm:pl-3.5 ss:pl-3  pb-1  my-2 2xl:text-sm xl:text-[13.5px] xx:text-[13px] mm:text-[13px] ss:text-[12.5px] font-medium  `} >
                    {new Date(note.createdAt).toLocaleDateString('en-US', options)}
                </p>
            <p className={`  ${note.completed ? "grayscale-50" : " "}  px-2 rounded-lg mr-5 flex items-center justify-center font-medium md:h-7 ss:h-6 md:text-[14.5px] ss:text-[13px] ${priorityStyles[note.priority]}`}>
                    {note.priority}
                </p>
            </div>
        </div>
    )

}

export default NoteItem
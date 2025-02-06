
function NoteStatus({ notes }) {

    const completedNotesLength = notes.filter((note) => note.completed).length
    const openNotesLength = notes.filter((note) => note.completed == false).length

    if (!notes.length) return <h2 className=" xx:w-full mx-auto font-bold 2xl:text-2xl xl:text-[22px] xg:text-[21px] xx:text-[21px] mm:text-[21px] ss:text-[18px] 2xl:mt-44 xl:mt-40 xg:mt-40 xx:mt-36 mm:mt-12 ss:mt-10 text-zinc-700 px-3 " >No Notes Has Already Been Added!</h2>

    return (
        <div>
            <ul className="flex justify-around items-center w-full shadow-mm xx:rounded-lg ss:rounded-xl  xl:my-3 xg:my-2.5 xx:my-3 mm:my-3 ss:my-3 py-2  mx-auto  bg-gradient-to-br from-white to-gray-100 " >
                <li className=" font-bold 2xl:text-[16px] xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] mm:text-[14.5px] ss:text-[14.5px] py-1 px-5  rounded-lg text-slate-900  " >
                    All <span className=" rr:inline-flex hidden 2xl:text-[14px] xl:text-[13px] xx:text-[12.5px] mm:text-[12px] ss:text-[11px] ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{notes.length}</span>
                </li>
                <li className=" font-bold 2xl:text-[16px] xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] mm:text-[14.5px] ss:text-[14.5px] py-1 px-5  rounded-lg text-slate-900  " >
                    Open <span className=" rr:inline-flex hidden 2xl:text-[14px] xl:text-[13px] xx:text-[12.5px] mm:text-[12px] ss:text-[11px] ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{openNotesLength}</span>
                </li>
                <li className=" font-bold 2xl:text-[16px] xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] mm:text-[14.5px] ss:text-[14.5px] py-1 px-5  rounded-lg text-slate-900  " >
                    Completed <span className=" rr:inline-flex hidden 2xl:text-[14px] xl:text-[13px] xx:text-[12.5px] mm:text-[12px] ss:text-[11px] ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{completedNotesLength}</span>
                </li>
            </ul>
        </div>
    )
}

export default NoteStatus
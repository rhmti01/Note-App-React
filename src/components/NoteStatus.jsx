
function NoteStatus({ notes }) {

    const completedNotesLength = notes.filter((note) => note.completed).length
    const openNotesLength = notes.filter((note) => note.completed == false).length

    if (!notes.length) return <h2 className=" xx:w-full sm:w-60 mx-auto font-bold 2xl:text-2xl xl:text-[22px] xg:text-[21px] xx:text-[21px] sm:text-[21px] 2xl:mt-44 xl:mt-40 xg:mt-40 xx:mt-36 sm:mt-12 text-zinc-700 " >No Notes Has Already Been Added !</h2>

    return (
        <div>
            <ul className="flex justify-around items-center w-full shadow-sm xx:rounded-lg sm:rounded-xl xl:my-3 xg:my-2.5 xx:my-3 sm:my-3 py-2  mx-auto  bg-gradient-to-br from-white to-neutral-200 " >
                <li className=" font-semibold 2xl:text-[16px] xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] sm:text-[14.5px] py-1 px-5  rounded-lg text-slate-900  " >
                    All <span className=" 2xl:text-[14px] xl:text-[13px] xx:text-[12.5px] sm:text-[12px] ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{notes.length}</span>
                </li>
                <li className=" font-semibold 2xl:text-[16px] xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] sm:text-[14.5px] py-1 px-5  rounded-lg text-slate-900  " >
                    Open <span className=" 2xl:text-[14px] xl:text-[13px] xx:text-[12.5px] sm:text-[12px] ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{openNotesLength}</span>
                </li>
                <li className=" font-semibold 2xl:text-[16px] xl:text-[15.5px] xg:text-[15px] xx:text-[14.5px] sm:text-[14.5px] py-1 px-5  rounded-lg text-slate-900  " >
                    Completed <span className=" 2xl:text-[14px] xl:text-[13px] xx:text-[12.5px] sm:text-[12px] ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{completedNotesLength}</span>
                </li>
            </ul>
        </div>
    )
}

export default NoteStatus
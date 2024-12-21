
function NoteStatus({ notes }) {

    const openNotesLength = notes.filter((note) => note.completed).length
    const completedNotesLength = notes.filter((note) => note.completed == false).length

    if (!notes.length) return <h2 className=" font-semibold text-2xl mt-36  text-zinc-700 " >No Notes Has Already Been Added !</h2>

    return (
        <div>
            <ul className="flex justify-around items-center w-full shadow-sm rounded-lg my-3 py-1 mx-auto   bg-gradient-to-br from-white to-neutral-200 " >
                <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >
                    All <span className=" ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{notes.length}</span>
                </li>
                <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >
                    Completed <span className=" ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{completedNotesLength}</span>
                </li>
                <li className=" font-semibold text-[16px] py-1.5 px-5  rounded-lg text-slate-900  " >
                    Open <span className=" ml-1 px-2 py-1 text-white bg-zinc-800 font-light rounded-full " >{openNotesLength}</span> </li>
            </ul>
        </div>
    )
}

export default NoteStatus
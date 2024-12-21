
function NoteHeader({ sortBy, onSortNotes }) {

    return (
        <div className=" w-full h-20 bg-white rounded-lg flex items-center justify-around  " >
            <h2 className=" font-bold  text-[32px] my-0 text-indigo-700 flex items-center  "  >Note-App React </h2>
            <form className="  ">
                <select
                    value={sortBy}
                    onChange={onSortNotes}
                    id="sortType"
                    className=" text-[15px] block w-64 p-2.5 bg-gray-50 border font-medium text-sm cursor-pointer border-gray-300 text-gray-900  rounded-lg focus:bg-indigo-50 focus:ring-indigo-500 focus:border-indigo-500  ">
                    <option className=" text-[15px] " selected value="latest">Sort based on latest notes</option>
                    <option className=" text-[15px] " value="earliest">Sort based on earliest notes</option>
                    <option className=" text-[15px] " value="completed">Sort based on completed notes</option>
                </select>
            </form>
        </div>
    )
}

export default NoteHeader
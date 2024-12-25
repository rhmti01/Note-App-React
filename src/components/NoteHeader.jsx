
function NoteHeader({ sortBy, onSortNotes }) {

    return (
        <div className=" w-full 2xl:h-20 xl:h-[76px] xx:h-[70px] bg-white rounded-lg flex items-center justify-around 2xl:mt-6 xl:mt-5 xx:mt-5 xx:w-[95%] " >
            <h2 className=" font-bold  2xl:text-[30px] xl:text-[28.5px] xg:text-[26px] xx:text-[24px] my-0  bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400 inline-block text-transparent bg-clip-text     "  >Note App React </h2>
            <form className="  ">
                <select
                    value={sortBy}
                    onChange={onSortNotes}
                    id="sortType"
                    className=" 2xl:text-[15px] xg:text-[14px] xx:text-[14px] block w-64 p-2.5 bg-gray-50 border font-medium text-sm cursor-pointer border-gray-300 text-gray-900  rounded-lg focus:bg-indigo-50 focus:ring-indigo-500 focus:border-indigo-500  ">
                    <option className=" 2xl:text-[15px] xg:text-[14px] xx:text-[14px] " selected value="latest">Sort based on latest notes</option>
                    <option className=" 2xl:text-[15px] xg:text-[14px] xx:text-[14px] " value="earliest">Sort based on earliest notes</option>
                    <option className=" 2xl:text-[15px] xg:text-[14px] xx:text-[14px] " value="completed">Sort based on completed notes</option>
                </select>
            </form>
        </div> 
    )
}

export default NoteHeader
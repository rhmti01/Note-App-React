/* eslint-disable react/prop-types */
import ThemeSwitch from "./ThemeSwitch";


function NoteHeader({ sortBy, onSortNotes }) {

    return (
        <div className="  w-full 2xl:h-20 xl:h-[76px] xx:h-[70px] mm:h-[68px] ss:h-auto mm:py-0 ss:py-3 bg-white ss:rounded-xl mm:rounded-lg flex items-center justify-around flex-wrap ss:gap-x-9 ss:px-5 mm:gap-y-0 ss:gap-y-3  2xl:mt-6 xl:mt-5 xx:mt-5 mm:mt-3 mm:w-[95%] " >
            <h2 className=" font-bold  2xl:text-[30px] xl:text-[28.5px] xg:text-[26px] xx:text-[24px] mm:text-[22px] ss:text-[22px] my-0  bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400 inline-block text-transparent bg-clip-text     "  >Note App React </h2>
            <div className=" flex items-center justify-between gap-x-5 " >
                <form className="  ">
                    <select
                        value={sortBy}
                        onChange={onSortNotes}
                        id="sortType"
                        className=" 2xl:text-[15px] xg:text-[14px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] block xx:w-64 mm:w-[235px] ss:w-[230px] mm:p-2.5 ss:p-2 bg-gray-50 border font-medium text-mm cursor-pointer border-gray-300 text-gray-900  rounded-lg focus:bg-indigo-50 focus:ring-indigo-500 focus:border-indigo-500  ">
                        <option className=" 2xl:text-[15px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] " selected value="latest">Sort based on latest notes</option>
                        <option className=" 2xl:text-[15px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] " value="earliest">Sort based on earliest notes</option>
                        <option className=" 2xl:text-[15px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] " value="completed">Sort based on completed notes</option>
                    </select>
                </form>
                <ThemeSwitch />
            </div>
        </div>
    )
}

export default NoteHeader


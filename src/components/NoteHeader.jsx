import SortDirection from "./SortDirection";
import ThemeSwitch from "./ThemeSwitch";

function NoteHeader({ sortBy, onSortNotes }) {
  return (
    <div className="  w-full ss:pt-4 mm:pt-0 2xl:h-20 xl:h-[76px] xx:h-[70px] mm:h-[68px] ss:h-auto pp:py-0 ss:py-3 bg-white dark:bg-gray-900/40 ww:rounded-xl  ss:rounded-b-lg mm:rounded-xl flex items-center justify-around flex-wrap ss:gap-x-9 ss:px-5 mm:gap-y-0 ss:gap-y-3  2xl:mt-6 xl:mt-5 xx:mt-5 ww:mt-3 ww:w-[95%] ">
      <h2 className=" font-bold  2xl:text-[30px] xl:text-[28.5px] xg:text-[26px] xx:text-[24px] mm:text-[22px] ss:text-[22px] my-0  bg-gradient-to-r from-indigo-700 via-indigo-500 to-indigo-400 dark:bg-gradient-to-r  inline-block text-transparent bg-clip-text   ">
        Note App React{" "}
      </h2>
      <div className=" flex items-center justify-between rr:gap-x-5 ss:gap-x-2 ">
        <form className=" flex justify-between items-center gap-x-3 ">
          <select
            value={sortBy}
            onChange={onSortNotes}
            id="sortType"
            className=" 2xl:text-[15px] xg:text-[14px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] block xx:w-56 mm:w-[200px] ss:w-[190px] mm:p-2.5 ss:p-2 bg-gray-50 dark:bg-gray-900 border font-medium text-mm cursor-pointer border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-100  rounded-lg focus:bg-indigo-50 dark:focus:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500  "
          >
            <option
              className=" 2xl:text-[15px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] "
              value="latest"
            >
              Sort by latest notes
            </option>
            <option
              className=" 2xl:text-[15px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] "
              value="earliest"
            >
              Sort by earliest notes
            </option>
            <option
              className=" 2xl:text-[15px] xx:text-[14px] mm:text-[13.5px] ss:text-[13px] "
              value="completed"
            >
              Sort by completed notes
            </option>
          </select>
          <SortDirection/>
        </form>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default NoteHeader;

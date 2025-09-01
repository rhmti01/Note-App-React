import React from "react";
import { useNoteDirContext } from "../context/NoteDirContext";

function SortDirection() {
  const { dir, setDir } = useNoteDirContext();

  return (
    <div>
      <select
        value={dir}
        onChange={(e) => setDir(e.target.value)}
        id="directionChanger"
        className=" 2xl:text-[14px] mm:text-[13.5px] ss:text-[13px] block xx:w-[70px]  ss:w-[65px] mm:p-2.5 ss:p-2 bg-gray-50 dark:bg-gray-900 border font-medium text-mm cursor-pointer border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-100  rounded-lg focus:bg-indigo-50 dark:focus:bg-gray-900 focus:ring-indigo-500 focus:border-indigo-500  "
      >
        <option
          className="2xl:text-[14px] mm:text-[13.5px] ss:text-[13px]  "
          value="ltr"
        >
          LTR
        </option>
        <option
          className="2xl:text-[14px] mm:text-[13.5px] ss:text-[13px]  "
          value="rtl"
        >
          RTL
        </option>
      </select>
    </div>
  );
}

export default SortDirection;

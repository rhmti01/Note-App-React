import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedNotePriority, setNotePriority] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !selectedNotePriority) return;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
      priority: selectedNotePriority,
    };

    setTitle("");
    setDescription("");
    setNotePriority(null);
    onAddNote(newNote);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className=" select-none my-3 xx:basis-1/3 mm:w-2/3 mm:max-w-96 ss:w-[80%] xl:mt-12 xg:mt-16 xx:mt-16 mm:mt-14 ss:mt-16 w-full  ">
      <h1 className=" text-center text-zinc-700 dark:text-gray-300 2xl:text-[27px] xl:text-[25px] xg:text-[24px] xx:text-[23px] mm:text-[24px] ss:text-[22px] font-semibold ">
        Add New Note{" "}
      </h1>
      <form className=" flex flex-col mt-6" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note Title ..."
          className="hover:shadow-mm text-zinc-800 2xl:my-5 xl:my-4 xg:my-4 xx:my-3.5 mm:my-3 ss:my-3 2xl:py-3 xg:py-2.5 mm:py-2.5 ss:py-2  2xl:px-4 xg:px-3.5 xx:px-3.5 mm:px-3 ss:px-3  2xl:text-[16px] xg:text-[15.5px] mm:text-[15.5px] ss:text-[15px] rounded-lg  placeholder-gray-500 dark:text-gray-200 outline-1 focus:outline-2 border-none focus:outline-offset-0  focus:outline-indigo-700 dark:outline-gray-800 outline-white
                 bg-white dark:bg-gray-900 xl:w-full xg:w-[87%] xx:w-[83%] mx-auto w-full "
        />
        <textarea
          value={description}
          onKeyDown={handleKeyDown}
          onChange={(e) => setDescription(e.target.value)}
          cols={3}
          type="text"
          placeholder="Note Description ..."
          className=" w-full xg:w-[87%] xx:w-[83%] hover:shadow-mm text-zinc-800  placeholder-gray-500 2xl:py-3 xl:py-2.5 xg:py-2.5 ss:py-2 2xl:px-4 xl:px-3.5 xg:px-3 ss:px-3
                 2xl:mb-5 xl:mb-4 xg:mb-3 2xl:text-[16px] xl:text-[15.5px] xg:text-[15.5px] mm:text-[15.5px] ss:text-[15px]  resize-none overflow-hidden outline-1 border-none focus:outline-offset-0 focus:outline-2 outline-white dark:outline-gray-800 focus:outline-indigo-700 bg-white dark:text-gray-200 dark:bg-gray-900 rounded-lg xl:w-full  mx-auto  "
        />
        <NotePriority
          selectedNotePriority={selectedNotePriority}
          setNotePriority={setNotePriority}
        />
        <button
          type="submit"
          className="  w-full xl:w-full xg:w-[87%] xx:w-[83%] mx-auto bg-indigo-700 px-8 py-3 rounded-xl font-medium 2xl:text-[18px] xg:text-[17px] xx:text-[16.5px] mm:text-[16px] ss:text-[15.5px] text-white xl:mt-5 xg:mt-8 xx:mt-7 mm:mt-6 ss:mt-6 cursor-pointer"
        >
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;

function NotePriority({ selectedNotePriority, setNotePriority }) {
  return (
    <div className="xl:mt-0 xg:mt-0 xx:mt-4 mm:mt-3 ss:mt-3   w-full xl:w-full xg:w-[87%] xx:w-[83%] mx-auto flex flex-col items-start bg-white dark:bg-gray-900 rounded-xl py-4 gap-y-3 ">
      <h3 className=" xx:text-[16.5px] font-semibold text-gray-800 dark:text-gray-300 pb-2 pl-4  ">
        Select Note Priority
      </h3>
      <div className=" w-full flex items-center justify-evenly   rounded-2xl ">
        <button
          type="button"
          onClick={() => setNotePriority("optional")}
          className={` xl:px-3.5 xl:py-1 mm:px-3 mm:py-[3px] ss:px-2.5 ss:py-0.5 rounded-lg xl:text-[15px] md:text-[14.5px] ss:text-[14px] transition 
          ${
            selectedNotePriority === "optional"
              ? "bg-gray-500 text-white ring-[3px] ring-gray-500 font-semibold  "
              : "dark:bg-gray-100 bg-gray-50 text-gray-500  ring-[1.5px] ring-gray-500 cursor-pointer outline-none border-none "
          }`}
        >
          Optional
        </button>
        <button
          type="button"
          onClick={() => setNotePriority("normal")}
          className={` xl:px-3.5 xl:py-1 mm:px-3 mm:py-[3px] ss:px-2.5 ss:py-0.5 rounded-lg xl:text-[15px] md:text-[14.5px] ss:text-[14px] transition 
          ${
            selectedNotePriority === "normal"
              ? "bg-amber-500 text-white ring-[3px] ring-amber-500 font-semibold  "
              : "dark:bg-amber-100 bg-amber-50 text-amber-500 ring-[1.5px] ring-amber-500 cursor-pointer outline-none border-none "
          }`}
        >
          Normal
        </button>
        <button
          type="button"
          onClick={() => setNotePriority("urgent")}
          className={` xl:px-3.5 xl:py-1 mm:px-3 mm:py-[3px] ss:px-2.5 ss:py-0.5 rounded-lg xl:text-[15px] md:text-[14.5px] ss:text-[14px] transition 
          ${
            selectedNotePriority === "urgent"
              ? "bg-red-500 text-white ring-[3px] ring-red-500 font-semibold "
              : "dark:bg-red-100 bg-red-50 text-red-500 ring-[1.5px] ring-red-500 cursor-pointer outline-none border-none  "
          }`}
        >
          Urgent
        </button>
      </div>
    </div>
  );
}

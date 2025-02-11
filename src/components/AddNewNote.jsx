import { useState } from "react";

// eslint-disable-next-line react/prop-types
function AddNewNote({ onAddNote }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !description) return

        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString(),
        }

        setTitle("")
        setDescription("")
        onAddNote(newNote)
    }


    return (
        <div className="my-3 xx:basis-1/3 mm:w-2/3 mm:max-w-96 ss:w-[80%] xl:mt-12 xg:mt-16 xx:mt-16 mm:mt-14 ss:mt-16 w-full  ">
            <h1 className=" text-center text-zinc-700 dark:text-gray-300 2xl:text-[27px] xl:text-[25px] xg:text-[24px] xx:text-[23px] mm:text-[24px] ss:text-[22px] font-semibold "  >Add New Note </h1>
            <form className=" flex flex-col mt-6" onSubmit={handleSubmit}  >
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Note Title ..."
                    className="hover:shadow-mm text-zinc-800 2xl:my-5 xl:my-4 xg:my-4 xx:my-3.5 mm:my-3 ss:my-3 2xl:py-3 xg:py-2.5 mm:py-2.5 ss:py-2  2xl:px-4 xg:px-3.5 xx:px-3.5 mm:px-3 ss:px-3  2xl:text-[16px] xg:text-[15.5px] mm:text-[15.5px] ss:text-[15px] rounded-lg  placeholder-gray-500 dark:text-gray-200 outline-1 focus:outline-2 border-none focus:outline-offset-0  focus:outline-indigo-700 dark:outline-gray-800 outline-white
                 bg-white dark:bg-gray-900 xl:w-full xg:w-[87%] xx:w-[83%] mx-auto w-full " />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols={3} id="" name="" type="text" placeholder="Note Description ..."
                    className=" w-full xg:w-[87%] xx:w-[83%] hover:shadow-mm text-zinc-800  placeholder-gray-500 2xl:py-3 xl:py-2.5 xg:py-2.5 ss:py-2 2xl:px-4 xl:px-3.5 xg:px-3 ss:px-3
                 2xl:mb-5 xl:mb-4 xg:mb-3 2xl:text-[16px] xl:text-[15.5px] xg:text-[15.5px] mm:text-[15.5px] ss:text-[15px]  resize-none overflow-hidden outline-1 border-none focus:outline-offset-0 focus:outline-2 outline-white dark:outline-gray-800 focus:outline-indigo-700 bg-white dark:text-gray-200 dark:bg-gray-900 rounded-lg xl:w-full  mx-auto  " />
                <button type="submit"
                    className=" w-full xl:w-full xg:w-[87%] xx:w-[83%] mx-auto bg-indigo-700 px-8 py-3 rounded-xl font-medium 2xl:text-[18px] xg:text-[17px] xx:text-[16.5px] mm:text-[16px] ss:text-[15.5px] text-white xl:mt-5 xg:mt-8 xx:mt-7 mm:mt-6 ss:mt-6 cursor-pointer" >Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote
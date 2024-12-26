import { useState } from "react";

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
        <div className="my-3 xx:basis-1/3 sm:w-80 xl:mt-12 xg:mt-16 xx:mt-16 sm:mt-14 w-full  ">
            <h1 className=" 2xl:text-[27px] xl:text-[25px] xg:text-[24px] xx:text-[23px] sm:text-[24px] font-semibold "  >Add New Note </h1>
            <form className=" flex flex-col " onSubmit={handleSubmit}  >
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Note Title ..." 
                className="hover:shadow-sm text-zinc-800 2xl:my-5 xl:my-4 xg:my-4 xx:my-3.5 sm:my-3 2xl:py-3 xg:py-2.5 sm:py-2.5  2xl:px-4 xg:px-3.5 xx:px-3.5 sm:px-3  2xl:text-[16px] xg:text-[15.5px] sm:text-[15.5px]  rounded-lg outline  placeholder-gray-500 outline-1 focus:outline-2 border-none focus:outline-offset-0  focus:outline-indigo-700 outline-white
                 bg-white xl:w-full xg:w-[87%] xx:w-[83%] mx-auto w-full " />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols={2} id="" name="" type="text" placeholder="Note Description ..." 
                className=" w-full xg:w-[87%] xx:w-[83%] hover:shadow-sm text-zinc-800  placeholder-gray-500 2xl:py-3 xl:py-2.5 xg:py-2.5 2xl:px-4 xl:px-3.5 xg:px-3
                 2xl:mb-5 xl:mb-4 xg:mb-3 2xl:text-[16px] xl:text-[15.5px] xg:text-[15.5px] sm:text-[15.5px] outline  resize-none overflow-hidden outline-1 border-none focus:outline-offset-0 focus:outline-2 outline-white  focus:outline-indigo-700 bg-white rounded-lg xl:w-full  mx-auto  " />
                <button  type="submit" 
                className=" w-full xl:w-full xg:w-[87%] xx:w-[83%] mx-auto bg-indigo-600 px-8 py-2.5 rounded-xl font-medium 2xl:text-[18px] xg:text-[17px] xx:text-[16.5px] sm:text-[16px] text-white xl:mt-5 xg:mt-8 xx:mt-7 sm:mt-6 " >Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote
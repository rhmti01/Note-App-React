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
        <div className="my-3 basis-1/3 mt-12 ">
            <h1 className=" text-3xl font-semibold "  >Add New Note</h1>
            <form className="mt-6 flex flex-col " onSubmit={handleSubmit}  >
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Note Title ..." className="text-zinc-800 my-5 py-3 px-4 rounded-lg outline hover:shadow-sm placeholder-gray-500 outline-1 focus:outline-2 border-none focus:outline-offset-0  focus:outline-indigo-700 outline-white
                 bg-white w-full " />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} cols={2} id="" name="" type="text" placeholder="Note Description ..." className=" text-zinc-800  placeholder-gray-500 outline  resize-none overflow-hidden outline-1 border-none focus:outline-offset-0 focus:outline-2 outline-white  focus:outline-indigo-700 bg-white mb-5  py-3 px-4 rounded-lg w-full  " />
                <button id="" name="" className=" w-full mx-auto bg-indigo-600 px-8 py-2.5 rounded-xl font-medium text-[18px] text-white mt-5" type="submit">Add New Note</button>
            </form>
        </div>
    )
}

export default AddNewNote
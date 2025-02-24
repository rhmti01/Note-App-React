import { useState } from "react";

function ModalOnEdit({ note, setModal, recordEditNote }) {
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);



    return (
        <div className="fixed inset-0 bg-gray-900/50 z110 backdrop-blur-md flex items-center justify-center">

            {/* space out of div */}
            <div
                onClick={() => setModal(false)}
                class="  cursor-pointer  inset-0 absolute  w-full h-screen z-50  "></div>

            <div className=" xl:scale-100 xx:scale-[0.87] mm:scale-[0.85] rr:scale-[0.82] ss:scale-[0.80] bg-white dark:bg-gray-900 p-7 rounded-2xl w-[350px] md:w-[420px] z-50 dark:shadow-indigo-900 ">
                <h2 className="text-gray-900 dark:text-white text-center text-2xl font-bold">Edit Todo</h2>
                <div className="mt-5">
                    <label className=" text-gray-800 dark:text-gray-200 block font-semibold text-[17px] ">Title</label>
                    <input
                        type="text"
                        className="w-full  py-2.5 px-3 dark:bg-gray-900 border border-stone-300 dark:border-gray-700 dark:text-white mx-auto  mt-3  rounded-[10px] outline-none focus:shadow-lg  focus:border-indigo-600   "
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mt-6">
                    <label className=" text-gray-800 dark:text-gray-200 block font-semibold text-[17px] ">Description</label>
                    <input
                        type="text"
                        className="w-full  py-2.5 px-3 dark:bg-gray-900 border border-stone-300 dark:border-gray-700 dark:text-white mx-auto  mt-3  rounded-[10px] outline-none focus:shadow-lg  focus:border-indigo-600   "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={() => recordEditNote(note.id, title, description)}
                        className="bg-gradient-to-tr from-indigo-700 to-indigo-600 text-white px-3 py-1.5 rounded-lg cursor-pointer"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={() => setModal(false)}
                        className="bg-gray-300 px-3 py-1.5 rounded-lg cursor-pointer "
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalOnEdit;

import React from "react";

function ModalOnRemove({recoredRemoveNote , setRemoveModal }) {
  return (
    <div className="fixed inset-0 bg-gray-900/20 z110 backdrop-blur-md flex items-center justify-center">
              
      {/* space out of div */}
      <div
        onClick={() => setRemoveModal(false)}
        class="  cursor-pointer  inset-0 absolute  w-full h-screen z-50  "
      ></div>

      <div className=" xl:scale-100 xx:scale-[0.87] mm:scale-[0.85] rr:scale-[0.82] ss:scale-[0.80] bg-white dark:bg-gray-900 ss:p-5 md:p-7 rounded-2xl w-[250px] md:w-[300px] z-50 dark:shadow-indigo-900 ">
        <h2 className="text-gray-900 dark:text-white text-center text-[22px] font-bold">
          Remove Note ?
        </h2>
        <div className="flex justify-between md:mt-12 ss:mt-10">
          <button
            onClick={()=>{
                recoredRemoveNote()
            }}
            className="bg-gradient-to-tr from-red-700 to-red-600 text-white px-3 py-1.5 rounded-lg cursor-pointer font-medium"
          >
            Ok 
          </button>
          <button
            onClick={() => setRemoveModal(false)}
            className="bg-gray-300 px-3 py-1.5 rounded-lg cursor-pointer font-medium "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalOnRemove;

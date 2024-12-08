import AddNewNote from "./AddNewNote.jsx";
import "/src/css/App.css";
import "/src/css/index.css";
function App() {
  return (
    <div className=" w-full max-w-screen-xl flex items-center flex-col  " >
      {/* note header */}
      Note Header
      <div className=" flex items-center justify-around w-full bg-yellow-100/ ">
        <AddNewNote/>
        <div className="">notes</div>
      </div>
    </div>
  )
}

export default App;

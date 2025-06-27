import { useEffect } from "react";
import { useSelector } from "react-redux";

const useSyncTodosToLocalStorage = () => {
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(todos));
  }, [todos]);
};

export default useSyncTodosToLocalStorage;
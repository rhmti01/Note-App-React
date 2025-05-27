import { useReducer, useEffect } from "react";
export default function useLocalStorageReducer(key, reducer , defaultValue) {

const  initializer = () => {
  const storedNotes = localStorage.getItem(key);
  return storedNotes ? JSON.parse(storedNotes) : defaultValue ;
}
  const [notes, dispatch] = useReducer(reducer, defaultValue , initializer);


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(notes));
  }, [key , notes]);

  return [notes,dispatch]

}
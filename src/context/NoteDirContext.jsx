import { createContext, useContext, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const NoteDirContext = createContext();

export function NoteDirProvider({ children }) {
   const [dir, setDir] = useLocalStorageState("dir", "ltr");

  return (
    <NoteDirContext.Provider value={{ dir, setDir }}>
      {children}
    </NoteDirContext.Provider>
  );
}

export function useNoteDirContext() {
  return useContext(NoteDirContext);
}
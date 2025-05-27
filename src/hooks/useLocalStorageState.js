import { useState , useEffect } from "react";

export default function useLocalStorageState(key,defaultValue) {
    
    const [state,setState] = useState(()=>{
        const savedState = localStorage.getItem(key);
        return savedState || defaultValue;
    })

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
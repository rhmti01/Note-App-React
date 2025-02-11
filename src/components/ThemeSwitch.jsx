/* eslint-disable react/no-unknown-property */

import { useState } from "react"

function ThemeSwitch() {

  const storageTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(perefers-color-scheme : dark)").matches
  const initialTheme = storageTheme || (systemPrefersDark ? "dark" : "light")

  const [theme, setTheme] = useState(initialTheme)

  const handleTheme = (e) => {
    const newTheme = e.currentTarget.id === "dark" ? "dark" : "light";
    applyTheme(newTheme);
  };

  const applyTheme = (newTheme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setTheme(newTheme);
  };

  if (storageTheme === "dark" || (!storageTheme && systemTheme)) {
    document.documentElement.classList.add("dark")
    console.log("ifffffffffffffffff");
  } else {
    document.documentElement.classList.remove("dark")
    console.log("elseeeeeeeeeeeeeeeeee");
  }

  console.log(theme);

  return (
    <div>
      <svg onClick={handleTheme} className={` ${theme === "dark" ? "block" : "hidden"} stroke-gray-800 size-8  cursor-pointer   `} id="light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
        stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
      <svg onClick={handleTheme} className={`  ${theme === "dark" ? "hidden" : "block"} stroke-gray-800 size-8 cursor-pointer `} id="dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
        stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    </div>
  )

}



// let systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
// const storageTheme = localStorage.getItem("theme")

// const handleTheme = (e) => {
//   let theme = e.currentTarget.id
//   console.log(theme);
//   console.log(document.documentElement);
//   switch (theme) {
//     case "dark": {
//       document.documentElement.classList.add("dark")
//       localStorage.setItem("theme", "dark")
//       break;
//     }
//     case "light": {
//       document.documentElement.classList.remove("dark")
//       localStorage.setItem("theme", "light")
//       break;
//     }
//   }
// }

// if (storageTheme === "dark" || (!storageTheme && systemTheme)) {
//   document.documentElement.classList.add("dark")
//   console.log("ifffffffffffffffff");
// } else {
//   document.documentElement.classList.remove("dark")
//   console.log("elseeeeeeeeeeeeeeeeee");
// }

export default ThemeSwitch
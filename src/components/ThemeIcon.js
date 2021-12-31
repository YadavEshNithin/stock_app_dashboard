import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="rounded-lg border-1 border-neutral-400 p-2 absolute right-32"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="rgb(163 163 163)"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeIcon;

import React from "react";
import useTheme from "../theme/theme";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <button
      className="font-bold py-2 px-4 rounded"
      onClick={toggleTheme}
    >
      {themeMode === "light" ? (
        <FaMoon
          aria-hidden="true"
          className="size-6 text-navbarText dark:text-darkNavbarText"
        />
      ) : (
        <FaSun
          aria-hidden="true"
          className="size-6 text-navbarText dark:text-darkNavbarText"
        />
      )}
    </button>
  );
}

export default ThemeBtn;

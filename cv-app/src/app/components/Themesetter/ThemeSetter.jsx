import React, { useContext } from "react";

import ThemeContext from "../../ThemeContext";
import "./ThemeSetter.scss";

const ThemeSetter = ({ themes }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeArray = Object.keys(themes);
  console.log(theme);
  return (
    <>
      <div className="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Style ({themes[theme]})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {themeArray.map((option, idx) => (
            <li>
              <button
                class="dropdown-item"
                onClick={(e) => setTheme(e.currentTarget.value)}
                value={option}
                key={idx}
              >
                {themes[option]}{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ThemeSetter;

import React, { useContext } from "react";

import ThemeContext from "../../ThemeContext";
import "./ThemeSetter.scss";

const ThemeSetter = ({ themes }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeArray = Object.keys(themes);
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Style ({themes[theme]})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {themeArray.map((option) => (
              <li key={ Math.random()}>
              <button
                className="dropdown-item"
                onClick={(e) => setTheme(e.currentTarget.value)}
                value={option}
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

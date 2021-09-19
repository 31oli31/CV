import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = ({ text, updateText, executeScroll }) => {
  const [scrollState, setScrollState] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-light  ${scrollState ? "navbar-Custom-scrolled" : "navbar-Custom"
        }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <label className="nav-link nav-link-custom" value="school" onClick={() => executeScroll('school')}>
                Ausbildung
              </label>
            </li>
            <li className="nav-item">
              <label className="nav-link nav-link-custom" value="school" onClick={() => executeScroll('work')}>
                Arbeit
              </label>
            </li>
            <li className="nav-item">
              <label className="nav-link nav-link-custom" value="school" onClick={() => executeScroll('intership')}>
                Praktikum
              </label>
            </li>
            <li className="nav-item">
              <label className="nav-link nav-link-custom" value="school" onClick={() => executeScroll('projects')}>
                Projekte
              </label>
            </li>
            <li className="nav-item">
            <label className="nav-link nav-link-custom" value="school" onClick={() => executeScroll('skills')}>
                Fähigkeiten
              </label>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {text.type == "german" ? "de" : "en"}
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <button
                    class="dropdown-item"
                    onClick={updateText}
                    value="german"
                  >
                    {text.language.german}
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item"
                    onClick={updateText}
                    value="english"
                  >
                    {text.language.english}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

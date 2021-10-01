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
            <li >
              <label className="nav-link nav-link-custom" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => executeScroll('school')}>
                Ausbildung
              </label>
            </li>
            <li >
              <label className="nav-link nav-link-custom"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => executeScroll('work')}>
                Arbeit
              </label>
            </li>
            <li >
              <label className="nav-link nav-link-custom" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => executeScroll('intership')}>
                Praktikum
              </label>
            </li>
            <li >
              <label className="nav-link nav-link-custom" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => executeScroll('projects')}>
                Projekte
              </label>
            </li>
            <li >
            <label className="nav-link nav-link-custom" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onClick={() => executeScroll('skills')}>
                Fähigkeiten
              </label>
            </li>
            <li className="nav-item dropdown" >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {text.type == "german" ? "de" : "en"}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={updateText}
                    value="german"
                  >
                    {text.language.german}
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
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

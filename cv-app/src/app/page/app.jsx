import React from "react";
import ThemeSetter from "../components/Themesetter/ThemeSetter.jsx";

import ThemeProvider from "../ThemeProvider";

import "../App.scss";
import Wave from "../components/Wave/Wave";
import CardList from "../components/Cards/CardList";
import Carosel from "../components/Carosel/Carosel";
import getText from "../service/getText";
import { getImageGroup } from "../service/getImage.js";
const App = () => {
  const [text, setText] = React.useState(false);

  const updateText = async (e) => {
    e.preventDefault();
    console.log(e);
    setText(await getText(e.target.value));
  };

  React.useEffect(async () => {
    if (!text) {
      setText(await getText());
    }
  }, []);

  const images = getImageGroup("swiper");

  return (
    <>
      {text ? (
        <ThemeProvider>
          <div className="app light" id="bootstrap-overrides">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Features
                      </a>
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
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
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
            <Wave />
            <div className="container">
              <div className="pageSettings d-flex">
                <button type="button" className="btn btn-primary">
                  {text.buttons.changeView}
                </button>
                <ThemeSetter
                  themes={{ light: "hell", dark: "dunkel", blue: "blau" }}
                />
              </div>
              <CardList {...text} />
              <Carosel images={images} />
            </div>
          </div>
        </ThemeProvider>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default App;

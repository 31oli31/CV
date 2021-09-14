import React, { useState } from "react";
import ThemeSetter from "../components/Themesetter/ThemeSetter.jsx";

import ThemeProvider from "../ThemeProvider";

import "../App.scss";
import Wave from "../components/Wave/Wave";
import CardList from "../components/Cards/CardList";
import Carosel from "../components/Carosel/Carosel";
import Navbar from "../components/Navbar/Navbar";
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
            <Navbar text={text} updateText={updateText} />
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
          <footer></footer>
        </ThemeProvider>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default App;

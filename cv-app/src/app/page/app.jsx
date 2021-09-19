import React, { useState } from "react";
import ThemeSetter from "../components/Themesetter/ThemeSetter.jsx";

import ThemeProvider from "../ThemeProvider";

import "../App.scss";
import Wave from "../components/Wave/Wave";
import Introduction from "../components/Introduction/Introduction";
import CardList from "../components/Cards/CardList";
import Carosel from "../components/Carosel/Carosel";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import getText from "../service/getText";
import { getImageGroup } from "../service/getImage.js";
const App = () => {
  const [text, setText] = React.useState(false);

  const updateText = async (e) => {
    e.preventDefault();
    setText(await getText(e.target.value));
  };

  React.useEffect(async () => {
    if (!text) {
      setText(await getText());
    }
  }, []);

  const images = getImageGroup("swiper");


  const refs = {
    school:React.useRef(null),
    work:React.useRef(null),
    intership:React.useRef(null),
    projects:React.useRef(null),
    skills:React.useRef(null),
  }

  const executeScroll = (refName) =>{ 
    console.log(refName);
    const ref = refs[refName];
    console.log(ref);

    ref.current.scrollIntoView();
  };    


  return (
    <>
      {text ? (
        <ThemeProvider>
          <div className="app light" id="bootstrap-overrides">
            <Navbar text={text} updateText={updateText} executeScroll={executeScroll} />
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
              <Introduction/>
              <Carosel images={images} refs={refs.skills} />

              <CardList {...text} refs={refs} />
            </div>
          <Footer/>
          </div>
        </ThemeProvider>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default App;

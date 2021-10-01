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
import useWindowDimensions from "../service/windowDimension";

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

  const { height, width } = useWindowDimensions();
  const showMobile = width<992;

  const refs = {
    school: React.useRef(null),
    work: React.useRef(null),
    intership: React.useRef(null),
    projects: React.useRef(null),
    skills: React.useRef(null),
  };

  const executeScroll = (refName) => {
    const ref = refs[refName];

    ref.current.scrollIntoView({behavior:'smooth'});
  };

  return (
    <>
      {text ? (
        <ThemeProvider>
          <div className="app light" id="bootstrap-overrides">
            <Navbar
              text={text}
              updateText={updateText}
              executeScroll={executeScroll}
            />
            
            <div className="t">
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
                <Introduction showMobile={showMobile}  executeScroll={executeScroll}/>
              </div>

            </div>
            <div className="test">
              <Carosel images={images} refs={refs.skills} showMobile={showMobile} />
              <CardList {...text} refs={refs} showMobile={showMobile}/>
            <Footer />
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

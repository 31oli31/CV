import React from "react";
import "./CardList.scss";
import CardDesktop from "./CardDesktop/CardDesktop";
import CardMobile from "./CardMobile/CardMobile";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import useWindowDimensions from "../../service/windowDimension";

const CardList = (props) => {
  const { cards, cardGroups, refs } = { ...props };
  const { height, width } = useWindowDimensions();
  const showMobile = width<992;
  console.log(width);
  /* cards.push({
    title: "Ausbildung",
    preview: (
      <div>
        Mein schulischer Werdegang:
        <ul className="previewList">
          <li>Studium: Wirtschaftsinformatik Master</li>
          <li>Studium: Wirtschaftsinformatik Bachelor</li>
          <li>Fachoberschule</li>
          <li>Realschule</li>
        </ul>
      </div>
    ),
    body: (
      <p>
        <h5>2021 April - heute</h5>
        Universität Augsburg
        <br />
        Schwerpunkt: Wirtschaftsinformatik
        <br />
        Abschluss: Master of Science
        <br />
        <br />
        <h5>2017 Oktober - 2021 Januar</h5>
        Universität Augsburg
        <br />
        Schwerpunkt: Wirtschaftsinformatik
        <br />
        Abschluss: Bachlor of Science
        <br />
        <br />
        <h5>2014 Oktober - 2017 Juli</h5>
        Hans Leipelt Fachoberschule
        <br />
        Abschluss: Allgemeines Abitur Mathematik
        <br />
        <br />
        <h5>2009 Oktober - 2014 Juli</h5>
        Realschule Heilig Kreuz Abschluss:
        <br />
        Mittlerer Schulabschluss Mathematik
      </p>
    ),
    image: "sstudents",
  });*/

  var groupBy = (xs, key) => {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const mapCards = groupBy(cards, "group");


  return (
    <>
      <div>
        {Object.keys(mapCards).map((cardGroup) => {
          return (
            <div ref={refs[cardGroup]} className="CardSection">
              <SectionHeadline text={cardGroups[cardGroup]}/>
              <div className="CardList">
                {mapCards[cardGroup].map((card) => {
                  if(showMobile){
                    return (
                      <CardMobile
                        title={card.title}
                        key={Math.random()}
                        preview={card.preview}
                        body={card.body}
                        image={card.image}
                      />
                    );
                  }
                  console.log("test")
                  return (
                    <CardDesktop
                      title={card.title}
                      key={Math.random()}
                      preview={card.preview}
                      body={card.body}
                      image={card.image}
                    />
                  );

                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;

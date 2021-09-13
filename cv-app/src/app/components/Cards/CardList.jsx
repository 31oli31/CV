import React from "react";
import "./CardList.scss";
import Card from "./Card/Card";

const CardList = (props) => {
  const { cards } = { ...props };
  cards.push({
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
  });
  return (
    <div>
      <div className="CardList">
        {cards.map((card) => {
          return (
            <Card
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
};

export default CardList;

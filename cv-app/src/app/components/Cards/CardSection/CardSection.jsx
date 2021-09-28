import React from "react";
import "./CardSection.scss";
import CardDesktop from "../CardDesktop/CardDesktop";
import CardMobile from "../CardMobile/CardMobile";
import SectionHeadline from "../../SectionHeadline/SectionHeadline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardSection = (props) => {
  const { mapCards, cardGroups, refs, showMobile, cardGroup } = { ...props };
  const [isCollapsed, setCollapsed] = React.useState(true);
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

  const handleCollapse = () => {
    setCollapsed(!isCollapsed); ////
  };

  const sectionBackgrounds = [
    "SectionBackground1",
    "SectionBackground2",
    "SectionBackground3",
  ];
  const sectionBackground = {};
  Object.keys(cardGroups).map((group, index) => {
    sectionBackground[group] = sectionBackgrounds[index % 2];
    return null;
  });

  const mobileStyle = showMobile ? "mobileSection" : null;

  return (
    <>
      <div
        className={`SectionWhite ${mobileStyle} ${sectionBackground[cardGroup]} `}
      >
        <div ref={refs[cardGroup]} className="CardSection container">
          <div
            className={`CardSection-headline  ${sectionBackground[cardGroup]}`}
          >
            {cardGroups[cardGroup]}
            <div
              type="button"
              onClick={handleCollapse}
              data-bs-toggle="collapse"
              data-bs-target={`#${cardGroup}`}
              aria-expanded="false"
              aria-controls={cardGroup}
            >
              {isCollapsed ? (
                <FontAwesomeIcon icon={["fas", "chevron-up"]} size="1x" />
              ) : (
                <FontAwesomeIcon icon={["fas", "chevron-down"]} size="1x" />
              )}
            </div>
          </div>
          <div className="collapse show" id={cardGroup}>
            <div className="CardList">
              {mapCards[cardGroup].map((card) => {
                if (showMobile) {
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
        </div>
      </div>
    </>
  );
};

export default CardSection;

import React from "react";
import "./Introduction.scss";
import "../SectionHeadline/SectionHeadline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import useWindowDimensions from "../../service/windowDimension";

import image from "./OliverDirr.png";

const Introduction = ({ showMobile, executeScroll, text }) => {
  const { height, width } = useWindowDimensions();
  const showImage = height>730;

  return (
    <div className="Introduction">
      <SectionHeadline text={"Über mich"} />
      {showMobile ? (
        <>
          <div className="mobilContent">
            <p>Hallo ich bin Oliver, ich studiere Wirtschaftsinformatik und bin 23
            Jahre alt. In der Vergangenheit habe ich verschiedenste
            Programmiererfahrungen, im besonderen im breich der Webentwicklung
            mit React gesammelt.
            </p>
            {showImage && <img className="Introduction-Mobile-Image" src={image} />}
              <button type="button" className="btn btn-primary Introduction-InfoButton">
                Mehr Infos
              </button>
          </div>
          <div className="bottomSection">
            <div type="button" onClick={() => executeScroll("skills")}>
              <FontAwesomeIcon icon={["fas", "chevron-circle-up"]} size="2x" />
            </div>
          </div>
        </>
      ) : (
        <div className="Introduction-content">
          <div class=" Introduction-text">
            Hallo ich bin Oliver, ich studiere Wirtschaftsinformatik und bin 23
            Jahre alt. In der Vergangenheit habe ich verschiedenste
            Programmiererfahrungen, im besonderen im breich der Webentwicklung
            mit React gesammelt.
          </div>
          <div class="">
            <img className="Introduction-image" src={image} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Introduction;

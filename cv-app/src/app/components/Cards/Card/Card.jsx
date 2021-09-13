import React from "react";
import "./Card.scss";
import CardModal from "../CardModal/CardModal";

import getImage from "../images/index";

const Card = (props) => {
  const { title, body, image, preview } = { ...props };
  const [modalState, setModalState] = React.useState(false);

  const closeModal = () => {
    setModalState(false);
  };

  const handleCardClick = () => {
    setModalState(true);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${getImage(image).default})`,
        }}
        className="Card"
        onClick={handleCardClick}
      >
        <div className="Card-Overlay">
          <div className="Card-Header">{title}</div>
          <div className="Card-Body hide">
            {preview}
            <br />
            Klicken für mehr Infos
          </div>
        </div>
      </div>
      <CardModal closeHandler={closeModal} state={modalState} {...props} />
    </div>
  );
};

export default Card;

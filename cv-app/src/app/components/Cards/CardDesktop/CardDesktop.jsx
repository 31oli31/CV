import React from "react";
import "./CardDesktop.scss";
import CardModal from "../CardModal/CardModal";
import getImage from "../images/index";

const CardDesktop = (props) => {
  const [modalState, setModalState] = React.useState(false);
  const { title, body, image, preview } = { ...props };

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
          backgroundImage: `url(${getImage(image)})`,
        }}
        className="Card"
        onClick={handleCardClick}
      >
        <div className="Card-Overlay">
          <div className="Card-Header">{title}</div>
          <div className="Card-Body hide">
            {preview}
          </div>
        </div>
      </div>
      <CardModal closeHandler={closeModal} state={modalState} {...props} />
    </div>
  );
};

export default CardDesktop;

import React from "react";
import "./CardMobile.scss";
import CardModal from "../CardModal/CardModal";
import getImage from "../images/index";

const CardMobile = (props) => {
  const [modalState, setModalState] = React.useState(false);
  const { title, body, image, preview } = { ...props };
  console.log("asdfas");

  const closeModal = () => {
    setModalState(false);
  };

  const handleCardClick = () => {
    setModalState(true);
  };

  return (
    <>
      <div
        className="CardMobile"
        onClick={handleCardClick}
      >
          <div className="CardMobile-Header">{title}</div>
      </div>
      <CardModal closeHandler={closeModal} state={modalState} {...props} />
    </>
  );
};

export default CardMobile;

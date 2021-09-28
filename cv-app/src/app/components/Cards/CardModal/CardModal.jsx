import React from "react";
import "./CardModal.scss";
import { Modal } from "bootstrap/dist/js/bootstrap.min.js";

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const CardModal = ({ closeHandler, state, title, body, image }) => {
  const ref = React.useRef(null);
  const refModal = React.useRef(null);
  const [myModal, setMyModel] = React.useState(null);

  React.useEffect(() => {
    if (state === true) {
      openModal();
    }
  }, [state]);

  React.useEffect(() => {
    if (refModal !== null && myModal === null) {
      setMyModel(new Modal(refModal.current));
    }
  }, [refModal]);

  const openModal = () => {
    myModal.show();
  };

  useOnClickOutside(ref, () => closeHandler());

  return (
    <>
      <div
        className="modal"
        data-backdrop="static"
        tabIndex="-1"
        ref={refModal}
      >
        <div className="modal-dialog modal-dialog-centered  modal-lg">
          <div className="modal-content" ref={ref}>
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeHandler}
              ></button>
            </div>
            <div className="modal-body">
              <div>{body}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModal;

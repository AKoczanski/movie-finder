import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

let color = " ";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(true);

  const closeModalHandler = () => {
    setShowModal(false);
    props.closeModal();
  };

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const setMarkColor = (mark) => {
    if (mark >= 7.8) {
      return "modal__backdrop__green";
    } else if (mark >= 5.8) {
      return "modal__backdrop__orange";
    } else {
      return "modal__backdrop__red";
    }
  };

  return (
    <React.Fragment>
      {showModal && (
        <div className="modal" onClick={closeModalHandler}>
          <div className="modal__backdrop" data-aos="flip-up">
            <h1 className="modal__backdrop__title">{props.title}</h1>
            <p className="modal__backdrop__description">{props.description}</p>
            <div className="modal__backdrop__mark">
              <p>
                Mark:{" "}
                <span className={`${setMarkColor(props.mark)}`}>
                  {props.mark}
                </span>
              </p>
            </div>
            <button className="modal__backdrop__btn">Close</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Modal;

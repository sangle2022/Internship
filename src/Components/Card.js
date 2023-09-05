import React, { useState } from "react";
import MyVerticallyCenteredModal from "./Modal";

const Card = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClick = () => {
    setModalShow(true);
  };

  return (
    <>
      <div className="outer_card" onClick={handleModalClick}>
        <h2>{product}</h2>
        <p>Unlimited Jokes On {product}</p>
      </div>
      {modalShow && (
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          heading={product}
        />
      )}
    </>
  );
};

export default Card;

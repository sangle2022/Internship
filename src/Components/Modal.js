import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { listProductDetails, resetProductDetails } from "../Actions/CardAction";

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDetails);
  const { loading, error, product } = data;
  console.log("ss", product);

  useEffect(() => {
    dispatch(resetProductDetails());
    dispatch(listProductDetails(props.heading));
  }, [props.heading, dispatch,props]);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
        <div className="modal_forCard">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      {loading ? (
        <Loader />
      ) : (
        <Modal.Body >
          <p>{product.value}</p>
          <button>Next joke</button>
        </Modal.Body>
      )}

</div>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;

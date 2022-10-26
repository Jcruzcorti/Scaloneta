import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Questions } from '../../mock/Questions';





function CartModal({score}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [player,setPlayer] = useState({
    name:""
  })





  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver puntuación
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ingrese su nombre a continuación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Tu puntuación fue {score} respuestas correctas de {Questions.length}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  // HACER QUE CUANDO ENVIA INFO CON EL MODAL, SE RENDERICE UNA FOTO DE MESSI DE ACUERDO A SU PUNTUACIÓN CON LAS RESPUESTAS CORRECTAS
}
export default CartModal;
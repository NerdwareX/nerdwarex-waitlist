import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion";

function ConnectPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.button
            className="px-[23px] py-2 btn-primary rounded-[20px] text-white block"
            onClick={handleShow}
            /*onClick={window['Connect']}
            id={'connect'}*/
            whileTap={{ scale: 0.9 }}
          >
           Connect 
        </motion.button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Wallet Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white block"
              onClick={handleShow}
              /*onClick={window['Connect']}
              id={'connect'}*/
              whileTap={{ scale: 0.9 }}
            >
            Connect Metamask
          </motion.button>

          <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white block"
              onClick={handleShow}
              /*onClick={window['Connect']}
              id={'connect'}*/
              whileTap={{ scale: 0.9 }}
            >
            Connect Unstoppable Domain
          </motion.button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConnectPopup;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion";
import Walletconnect from '../../assets/walletconnectimg.png';
import Unstoppabledomain from '../../assets/unstoppabledomain.png';

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
          <Modal.Title className="text-[#2B2B8B] font-semibold text-[36px] text-left mb-6">Connect Wallet</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white block mx-auto font-medium"
                onClick={handleShow}
                /*onClick={window['Connect']}
                id={'connect'}*/
                whileTap={{ scale: 0.9 }}
              ><img src={Walletconnect} alt="wallet connect icon"
                className="md:flex w-[10%] h-[20%] lg:[20%] block mx-auto font-medium"/>
                  WalletConnect
            </motion.button>
              <br/>
            <motion.button
                className="px-[23px] py-2 btn-primary rounded-[20px] text-white block mx-auto font-medium"
                onClick={handleShow}
                whileTap={{ scale: 0.9 }}
              ><img src={Unstoppabledomain} alt="Unstoppable Domain" 
                className="md:flex w-[5%] h-[5%] lg:[5%] block mx-auto font-medium"/>
                  Unstoppable Domain
            </motion.button>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConnectPopup;

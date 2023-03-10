import React, { useState, useEffect} from "react";
import UAuth from "@uauth/js";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Walletconnect from "../../assets/walletconnectimg.png";
import metamask from "../../assets/metamask.png";
import { LoginDemo } from "../home";

function ConnectPopup() {
  const [show, setShow] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const [domainName, setDomainName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Initialize UAuth for Unstoppable Domains
  const uauth = new UAuth({
    clientID: "e8e4f26c-3b4c-4840-8951-9636717f4fe9",
    redirectUri: "https://www.nerdwarex.com",
    scope: "openid wallet email profile:optional social:optional",
  });
  
  // Login
  const login = () => {
    try {
      uauth.loginWithPopup().then((authorization) => {
        setUserActive(true);
        // Toast Notification
        toast.success("Logged in Successfully!", {
          pauseOnHover: false,
        });
      });
    } catch (error) {
      setUserActive(false);
      toast.error("Error logging in!", {
        pauseOnHover: false,
      });
      console.error(error);
    }
  };

  // Logout
  const logout = async () => {
    try {
      await uauth.logout();
      // Toast Notification
      toast.success("Logged out!", {
        pauseOnHover: false,
      });
      setUserActive(false);
    } catch (error) {
      // Toast Notification
      toast.error("Error Logging out!", {
        pauseOnHover: false,
      });
      setUserActive(true);
    }
  };

  // Check if user is logged in
  useEffect(() => {
    uauth
      .user()
      .then((user) => {
        // user exists
        setUserActive(true);
        setDomainName(user.sub);
      })
      .catch((err) => {
        // user does not exist
        setUserActive(false);
        console.error(err);
      });

  })

  return (
    <div className="ml-10">
      <motion.button
        className="px-[23px] py-2 btn-primary rounded-[20px] text-white block"
        onClick={handleShow}
        whileTap={{ scale: 0.9 }}
      >
        {userActive === true ? domainName : "Connect"}
      </motion.button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-[#2B2B8B] font-semibold text-[36px] text-left mb-6">
            Connect Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userActive === true ? (
            ""
          ) : (
            <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
              onClick={window["Connect"]}
              id={"connect"}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={metamask}
                alt="Metamask"
                className="md:flex w-[10%] h-[20%] lg:[20%] block mx-auto font-medium"
              />
              Metamask
            </motion.button>
          )}
          <br />
          {userActive === true ? (
            ""
          ) : (
            <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
              onClick={handleShow}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={Walletconnect}
                alt="wallet connect icon"
                className="md:flex w-[10%] h-[20%] lg:[20%] block mx-auto font-medium"
              />
              WalletConnect
            </motion.button>
          )}
          <br />
          <LoginDemo
            userActive={userActive}
            setUserActive={setUserActive}
            domainName={domainName}
            login={login}
            logout={logout}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConnectPopup;

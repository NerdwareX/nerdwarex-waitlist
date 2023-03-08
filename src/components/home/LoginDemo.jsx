import React from "react";
import UAuth from "@uauth/js";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

function LoginDemo({ userActive, setUserActive, domainName, setDomainName }) {
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

  return (
    <div id="LoginDemoArea">
      <motion.button
        className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
        onClick={login}
        whileTap={{ scale: 0.9 }}
      >
        {userActive ? domainName : "Unstoppable Domain"}
      </motion.button>
      <br />
      {userActive && (
        <motion.button
          variant="danger"
          onClick={logout}
          className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
          whileTap={{ scale: 0.9 }}
        >
          Logout
        </motion.button>
      )}
    </div>
  );
}

export default LoginDemo;

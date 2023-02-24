import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer closeOnClick={false} hideProgressBar />
    <App />
  </React.StrictMode>
);

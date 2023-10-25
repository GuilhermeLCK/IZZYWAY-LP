import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Cartaz from "./Components/Cartaz/Cartaz";

import Carrosel from "./Components/Carrosel/Carrosel";

import Integracoes from "./Components/Integracoes/Integracoes";

import FormFooter from "./Components/FormFooter/FormFooter";

import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={100}
      limit={2}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Header />
    <Cards />
    <Cartaz />
    <Carrosel />
    <Integracoes />

    <FormFooter />
    <Footer />
  </React.StrictMode>
);

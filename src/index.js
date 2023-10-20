import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Cartaz from "./Components/Cartaz/Cartaz";

import Carrosel from "./Components/Carrosel/Carrosel";

import Integracoes from "./Components/Integracoes/Integracoes";

import FormFooter from "./Components/FormFooter/FormFooter";

import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Cards />
    <Integracoes />
    <Carrosel />

    <FormFooter />
  </React.StrictMode>
);

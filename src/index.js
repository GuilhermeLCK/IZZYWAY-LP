import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Cartaz from "./Components/Cartaz/Cartaz";

import Carrosel from "./Components/Carrosel/Carrosel";

import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Cards />
    <Carrosel />
    <Cartaz />
  </React.StrictMode>
);

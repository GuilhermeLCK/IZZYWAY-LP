import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header/Header";
import Youtub from "./Components/Youtub/Youtub";
import Metricas from "./Components/Metricas/Metricas";
import Cartaz from "./Components/Cartaz/Cartaz";

import "./App.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Youtub />
    <Metricas />
    <Cartaz />
  </React.StrictMode>
);

import { React, useState } from "react";
import "./Header.scss";
import LogoBranca from "../../img/LogoBranco.png";
import { ToastContainer, toast } from "react-toastify";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MaskedInput from "react-maskedinput";
import InputForm from "../InputForm/InputForm";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Açaiterias",
      "Bares e Restaurantes ",
      "Cafeterias",
      "Hamburguerias",
      "Padarias",
      "Lanchonetee",
      "Pizzaria",
      "Sushi",
      "Quiosque",
      "Sorveteria",
    ],
    loop: true,
    typeSpeed: 140,
    deleteSpeed: 70,
  });

  return (
    <>
      <header className="container-header">
        <img src={LogoBranca} alt="Logo IzzWay Branca" />
      </header>

      <div className="container-section">
        <div className="section-meio">
          <div className="section-inf">
            <div className="flash"></div>
            <h1>
              Transforme a gestão do seu negócio com o <span>IzzyWay</span>
            </h1>
            <p>
              O sistema de gestão ideal para <br />
              <span>{text}</span>
            </p>
          </div>
          <div className="section-form">
            <InputForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

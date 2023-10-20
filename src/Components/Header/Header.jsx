import React from "react";
import "./Header.scss";
import LogoBranca from "../../img/LogoBranco.png";
import { FaApple, FaRegClock } from "react-icons/fa";

import Banner from "../../img/IzzyWayBanner.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
            <div className="form-table">
              <div className="form-inf">
                <p>
                  Preencha o formulário e garanta mais agilidade no seu negócio
                  com as nossas soluções digitais.
                </p>
                <div className="label-input">
                  <label>
                    Nome Completo<span>*</span>
                  </label>
                  <input type="text" placeholder="Digite seu nome completo" />
                </div>

                <div className="label-input">
                  <label>
                    E-mail<span>*</span>
                  </label>
                  <input type="text" placeholder="seuemail@email.com" />
                </div>

                <div className="label-input">
                  <label>
                    Telefone<span>*</span>
                  </label>
                  <input type="text" placeholder="(00) 00000-0000" />
                </div>

                <div className="label-input">
                  <label>
                    Nome do restaurante<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o nome do seu Restaurante"
                  />
                </div>

                <div className="label-input">
                  <label>
                    Quantidade de funcionários<span>*</span>
                  </label>
                  <select>
                    <option value="" disabled selected>
                      Selecione uma opção
                    </option>
                    <option value="1">1</option>
                    <option value="1-5">1 a 5</option>
                    <option value="6-10">6 a 10</option>
                    <option value="above-10">Acima de 10</option>
                  </select>
                </div>

                <button id="Button_Consultor"> Falar com um consultor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

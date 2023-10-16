import React from "react";
import "./Header.scss";
import Goomer from "../../img/LOGO-CIMA.png";
import { FaApple, FaRegClock } from "react-icons/fa";

import ImgPosto from "../../img/gastro.webp";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Gastropub", "Hotéis ", "Lanchonetes"],
    loop: true,
    typeSpeed: 140,
    deleteSpeed: 70,
  });

  return (
    <>
      <header className="container-header">
        <img src={Goomer} alt="Goomer" />
      </header>

      <div className="container-section">
        <div className="section-meio">
          <div className="section-inf">
            <div className="inf-img">
              <img src={ImgPosto} alt="ImgPosto" className="ImgPosto" />

              <h1>
                Solução de Sistema em Nuvem para seu <br></br>
                <span>{text}</span>
              </h1>
              <p>
                Encante na experiência de seus clientes, aumente a agilidade de
                seu time e diminua seus custos operacionais.
              </p>
            </div>
            <div className="inf-text">
              <p>
                <FaRegClock className="FaApple" />
                Reduza em até 20% o tempo de espera
              </p>
              <p>
                {" "}
                <FaApple className="FaApple" />
                Aumente 50% o seu faturamento
              </p>
              <p>
                {" "}
                <FaRegClock className="FaApple" />
                Reduza em até 60% os custos com equipe
              </p>
              <p>
                {" "}
                <FaApple className="FaApple" />
                Cardápio 100% digital
              </p>
              <p>
                <FaRegClock className="FaApple" />
                Integrado com os melhores Sistemas de Gestão
              </p>
            </div>
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

                <button> Falar com um consultor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

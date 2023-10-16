import React from "react";
import "./Cartaz.scss";
import { FaApple, FaRegClock } from "react-icons/fa";
import Tablet from "../../img/tablet.webp";

function Cartaz() {
  return (
    <div className="container-cartaz">
      <div className="cartaz-meio">
        <div className="section-cartaz">
          <div className="section-text">
            <h1>A solução completa para seu Restaurante </h1>
          </div>
          <div className="section-cartazes">
            <div className="cartaz">
              <img src={Tablet} alt="Tablet" />

              <div className="cartaz-inf">
                <h2>Cardápio para delivery</h2>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="cartaz">
              <img src={Tablet} alt="Tablet" />

              <div className="cartaz-inf">
                <h2>Cardápio para delivery</h2>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="cartaz">
              <img src={Tablet} alt="Tablet" />

              <div className="cartaz-inf">
                <h2>Cardápio para delivery</h2>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Aumento das vendas em até 20% com sugestões e recomendações
                    personalizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartaz;

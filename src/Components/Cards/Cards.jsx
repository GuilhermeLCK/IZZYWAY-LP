import React from "react";
import "./Cards.scss";
import Nuvem from "../../img/26.png";
import Suporte from "../../img/27.png";
import Sistema from "../../img/28.png";
import Implantacao from "../../img/29.png";

function Cards() {
  return (
    <div className="container-cards">
      <div className="section-meio-card">
        <div className="section-inf-cards">
          <h1>Tudo em um só lugar</h1>
          <p>
            Potencialize o crescimento do seu restaurante com nosso sistema de
            gestão em nuvem. conte com ferramentas poderosas para simplificar e
            agilizar o dia a dia da sua equipe.
          </p>
        </div>
        <div className="section-img-cards">
          <div className="cards-img">
            <img src={Nuvem} alt="" />
            <h2>Plataforma em nuvem</h2>
            <p>Acesse suas informações de qualquer lugar, a qualquer momento</p>
          </div>
          <div className="cards-img">
            <img src={Nuvem} alt="" />
            <h2>Suporte Humanizado</h2>
            <p>
              Suporte treinado e disponível todos os dias de 08h à meia-noite
            </p>
          </div>
          <div className="cards-img">
            <img src={Nuvem} alt="" />
            <h2>Implantação eficiente</h2>
            <p>Oferecemos uma implantação rápida e sem gargarlos.</p>
          </div>
          <div className="cards-img">
            <img src={Nuvem} alt="" />
            <h2>Sistema multiloja</h2>
            <p>Gerenciar todas as suas unidades de forma centralizada</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";

import "./Integracoes.scss";

import Painel from "../../img/painel.png";

function Integracoes() {
  // Crie um objeto vazio para armazenar as imagens importadas
  const importedImages = {};

  // Faça um loop de 10 a 25 e importe as imagens individualmente
  for (let i = 10; i <= 25; i++) {
    const imageName = `${i}.png`;
    importedImages[`foto${i}`] = require(`../../img/${imageName}`);
  }
  return (
    <div className="container-Integracoes">
      <div className="section-meio-Integracoes">
        <div className="section-inf-Integracoes">
          <h1>
            MAIS DE 40 INTEGRAÇÕES REUNIDAS PARA IMPULSIONAR O SEU NEGÓCIO EM
            UMA <span> ÚNICA PLATAFORMA!</span>
          </h1>
        </div>

        <div className="section-img-Integracoes">
          <div className="Integracoes-img">
            <img src={importedImages.foto10} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto11} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto12} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto13} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto14} alt="Integraçoes IzzyWay" />
          </div>
          <div className="Integracoes-img">
            <img src={importedImages.foto16} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto17} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto18} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto19} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto20} alt="Integraçoes IzzyWay" />
          </div>
          <div className="Integracoes-img">
            <img src={importedImages.foto22} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto23} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto24} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto25} alt="Integraçoes IzzyWay" />
            <img src={importedImages.foto15} alt="Integraçoes IzzyWay" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integracoes;

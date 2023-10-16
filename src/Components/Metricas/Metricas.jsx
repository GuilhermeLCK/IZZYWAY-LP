import React from "react";
import "./Metricas.scss";

function Metricas() {
  return (
    <div className="container-Metricas">
      <div className="Metricas">
        <div className="Metricas-info-container">
          <div className="Metricas-info">
            <p>+200 mil</p>
            <span>de lojas cadastradas</span>
          </div>
        </div>

        <div className="Metricas-info-container">
          <div className="Metricas-info">
            <p>+100 milhões</p>
            <span>de economia em taxas</span>
          </div>
        </div>

        <div className="Metricas-info-container">
          <div className="Metricas-info">
            <p>+5 milhões</p>
            <span>de pessoas utilizam por mês</span>
          </div>
        </div>

        <div className="Metricas-info-container">
          <div className="Metricas-info">
            <p>+90%</p>
            <span>de aprovação dos clientes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metricas;

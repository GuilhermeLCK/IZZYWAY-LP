import React from "react";

import "./FormFooter.scss";

import FotoForm from "../../img/CelularForm.png";

function FormFooter() {
  return (
    <div className="container-FormFooter">
      <div className="section-meio-FormFooter">
        <div className="section-img-FormFooter">
          <img src={FotoForm} alt="" />
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
  );
}

export default FormFooter;

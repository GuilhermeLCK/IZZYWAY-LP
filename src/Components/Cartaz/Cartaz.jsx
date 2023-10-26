import React from "react";
import "./Cartaz.scss";
import { FaApple, FaRegClock } from "react-icons/fa";
import Financeiro from "../../img/FINA.png";

import ESTO from "../../img/ESTO.png";

import FISCO from "../../img/FISCO.png";

import MOVI from "../../img/MOVI.png";

function Cartaz() {
  function scrollToConsultor() {
    window.scrollTo({ top: 250, behavior: "smooth" });
  }

  return (
    <div className="container-cartaz">
      <div className="cartaz-meio">
        <div className="section-cartaz">
          <div className="section-title-cartaz">
            <h1>
              Descubra se a <span>IzzyWay</span> é para você!
            </h1>
          </div>

          <div className="section-cartazes-cartaz">
            <div className="section-duble-cartaz">
              <div className="section-duble-cartaz-divs">
                <div className="section-duble-cartaz-img">
                  <img src={Financeiro} alt="" />
                </div>
                <div className="section-duble-cartaz-inf">
                  <h2>CONTROLE FINANCEIRO</h2>
                  <p>
                    Gerencie suas finanças. Controle contas a pagar e receber,
                    faça conciliação bancária, acompanhe fluxo de caixa e gere
                    relatórios Finas detalhados, DRE e muito mais. Tudo para
                    tomar decisões estratégicas.
                  </p>
                </div>
              </div>
              <div className="section-duble-cartaz-divs">
                <div className="section-duble-cartaz-img">
                  <img src={ESTO} alt="" />
                </div>
                <div className="section-duble-cartaz-inf">
                  <h2>GESTÃO DE ESTOQUE</h2>
                  <p>
                    Tenha total controle sobre suas mercadorias. Gerencie
                    entradas e saídas, faça inventários, defina níveis de
                    estoque mínimo e máximo, e obtenha insights valiosos sobre a
                    movimentação dos produtos.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-duble-cartaz">
              <div className="section-duble-cartaz-divs">
                <div className="section-duble-cartaz-img">
                  <img src={MOVI} alt="" />
                </div>
                <div className="section-duble-cartaz-inf">
                  <h2>ACOMPANHE SUAS MOVIMENTAÇÕES</h2>
                  <p>
                    Registre suas vendas, compras, transferências entre lojas,
                    entrada de notas, curva ABC e muito mais. Tenha visibilidade
                    completa das operações e tome decisões baseadas em dados
                    precisos.
                  </p>
                </div>
              </div>
              <div className="section-duble-cartaz-divs">
                <div className="section-duble-cartaz-img">
                  <img src={FISCO} alt="" />
                </div>
                <div className="section-duble-cartaz-inf">
                  <h2>FISCAL</h2>
                  <p>
                    Facilita a emissão de documentos fiscais, como (NF-e),
                    (NFS-e) além do (MDF-e). Fornece um gerenciador de XML para
                    organizar e armazenar os arquivos XML das notas fiscais,
                    para manter você atualizado com as regras fiscais vigentes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-title-cartaz">
            <a href="#FormClick"> É EXATAMENTE DISSO QUE PRECISO</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartaz;

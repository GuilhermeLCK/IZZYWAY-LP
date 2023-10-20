import React from "react";
import "./Cartaz.scss";
import { FaApple, FaRegClock } from "react-icons/fa";
import Tablet from "../../img/tablet.webp";
import PDV from "../../img/PDV.png";
import MOBILE from "../../img/mobileipos.png";
import ENCOMENDA from "../../img/encomenda.png";

function Cartaz() {
  function scrollToConsultor() {
    window.scrollTo({ top: 250, behavior: "smooth" });
  }

  return (
    <div className="container-cartaz">
      <div className="cartaz-meio">
        <div className="section-cartaz">
          <div className="section-text">
            <h1>A solução completa para seu Restaurante </h1>
          </div>
          <div className="section-cartazes">
            <div className="cartaz">
              <img src={PDV} alt="Tablet" />

              <div className="cartaz-inf">
                <h2>iPOS PDV</h2>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Com o iPOS, você trabalha com a balança integrada ao sistema
                    e uma gestão eficaz de frente de loja e controle de insumos.
                    Tudo isso através de uma tela desenhada para lançamentos
                    rápidos de self-service.
                  </p>
                </div>

                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Para o bom funcionamento do salão, é necessário uma gestão
                    que inclua pedidos feitos direto na mesa, envio automático
                    para cozinha, pagamento e outras operações fundamentais.
                    Garanta o melhor atendimento para o seu cliente com um
                    sistema que funciona e é especialista no seu negócio.
                  </p>
                </div>
              </div>
            </div>

            <div className="cartaz">
              <img src={ENCOMENDA} alt="Tablet" />

              <div className="cartaz-inf">
                <h2>iPOS Mobile</h2>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Através deste App Intuitivo sua equipe de atendimento terá
                    uma ter melhor experiência vendas, enviando, consultando e
                    imprimindo pedidos a partir de um smartphone.
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Atendimentos mais rápidos, proporcionam uma melhor
                    experiência e fidelização de seus clientes.
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
              <img src={MOBILE} alt="Tablet" />

              <div className="cartaz-inf">
                <h2>Gerenciamento unificado de pedidos de Delivery</h2>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Integração com apps de Entregas e motoboys, integração com
                    apps de Entregas e motoboys Entrengue seus pedidos com frota
                    própria ou integrando automáticamente com nossos parceiros
                    de logística
                  </p>
                </div>
                <div className="inf-text">
                  <span>
                    <FaApple className="fa" />
                  </span>
                  <p>
                    Controle os principais marketplace em uma única tela, evite
                    o retrabalho de passar informações de outros apps
                    manualmente e gerencie todas as informações em sua frente de
                    loja. Tudo automático para você ganhar tempo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-button">
            <button onClick={scrollToConsultor}>
              É EXATAMENTE ISSO QUE PRECISO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartaz;

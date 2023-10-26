import React from "react";

import "./Footer.scss";

import Face from "../../img/face.svg";
import Yt from "../../img/yt.svg";
import Insta from "../../img/insta.svg";
import Linkedin from "../../img/linkedin.svg";
import YouTube from "react-youtube";

function Footer() {
  return (
    <div className="container-Footer">
      <div className="section-meio-Footer">
        <div className="section-contato">
          <h1>Entre em contato</h1>
          <a href="https://www.izzyway.com.br" target="_blank">
            www.izzyway.com.br
          </a>

          <p>(85) 4102 - 8705</p>
        </div>
        <div className="section-localizacao">
          <p>
            R. Caetano Ximenes Aragão, 665 - Luciano Cavalcante, Fortaleza - CE,
            60813-620
          </p>

          <p>Siga-nos nas redes sociais</p>
          <div className="section-localizacao-link">
            <a
              href="https://www.facebook.com/izzywaytecnologia/?locale=pt_BR"
              target="_blank"
            >
              <img src={Face} alt="Logo" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCjkF2C7oma58bwrZFkvoKAQ"
              target="_blank"
            >
              <img src={Yt} alt="Logo" />
            </a>
            <a
              href="https://www.instagram.com/izzywaytecnologia/?hl=pt"
              target="_blank"
            >
              <img src={Insta} alt="Logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/izzyway/mycompany/"
              target="_blank"
            >
              <img src={Linkedin} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

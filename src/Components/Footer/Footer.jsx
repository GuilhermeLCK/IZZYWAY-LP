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
          <p>WWW.IZZYWAY.COM.BR</p>

          <p>(85) 4102 - 8705</p>
        </div>
        <div className="section-localizacao">
          <p>
            R. Caetano Ximenes Aragão, 665 - Luciano Cavalcante, Fortaleza - CE,
            60813-620
          </p>

          <p>Siga nas redes sociais</p>
          <div className="section-localizacao-link">
            <a href="">
              <img src={Face} alt="Logo" />
            </a>
            <a href="">
              <img src={Yt} alt="Logo" />
            </a>
            <a href="">
              <img src={Insta} alt="Logo" />
            </a>
            <a href="">
              <img src={Linkedin} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

import "./FormFooter.scss";

import FotoForm from "../../img/CelularForm.png";
import InputForm from "../InputForm/InputForm";

function FormFooter() {
  return (
    <div className="container-FormFooter">
      <div className="section-meio-FormFooter">
        <div className="section-img-FormFooter">
          <img src={FotoForm} alt="" />
        </div>
        <div className="section-former" id="FormClick">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default FormFooter;

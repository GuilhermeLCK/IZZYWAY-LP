import { React, useState } from "react";
import "./Header.scss";
import LogoBranca from "../../img/LogoBranco.png";
import { ToastContainer, toast } from "react-toastify";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Açaiterias",
      "Bares e Restaurantes ",
      "Cafeterias",
      "Hamburguerias",
      "Padarias",
      "Lanchonetee",
      "Pizzaria",
      "Sushi",
      "Quiosque",
      "Sorveteria",
    ],
    loop: true,
    typeSpeed: 140,
    deleteSpeed: 70,
  });

  const [NameCompleto, SetNameCompleto] = useState("");

  const [Email, SetEmail] = useState("");

  const [Telefone, SetTelefone] = useState("");

  const [NomeDoRestaurante, SetNomeDoRestaurante] = useState("");

  const [QuantidadeFuncionario, SetQuantidadeFuncionario] = useState("");

  const handleSelectChange = (e) => {
    SetQuantidadeFuncionario(e.target.value);
    console.log(QuantidadeFuncionario);
  };

  function EnviarDados() {
    toast.success("Enviado com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  }

  return (
    <>
      <header className="container-header">
        <img src={LogoBranca} alt="Logo IzzWay Branca" />
      </header>

      <div className="container-section">
        <div className="section-meio">
          <div className="section-inf">
            <div className="flash"></div>
            <h1>
              Transforme a gestão do seu negócio com o <span>IzzyWay</span>
            </h1>
            <p>
              O sistema de gestão ideal para <br />
              <span>{text}</span>
            </p>
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
                  <input
                    type="text"
                    placeholder="Digite seu nome completo"
                    onChange={(e) => {
                      SetNameCompleto(e.target.value);
                    }}
                  />
                </div>

                <div className="label-input">
                  <label>
                    E-mail<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="seuemail@email.com"
                    onChange={(e) => {
                      SetEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="label-input">
                  <label>
                    Telefone<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    onChange={(e) => {
                      SetTelefone(e.target.value);
                    }}
                  />
                </div>

                <div className="label-input">
                  <label>
                    Nome do restaurante<span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o nome do seu Restaurante"
                    onChange={(e) => {
                      SetNomeDoRestaurante(e.target.value);
                    }}
                  />
                </div>

                <div className="label-input">
                  <label>
                    Quantidade de funcionários<span>*</span>
                  </label>
                  <select
                    value={QuantidadeFuncionario}
                    onChange={handleSelectChange}
                  >
                    <option disabled selected>
                      Selecione uma opção
                    </option>
                    <option value="1">1</option>
                    <option value="1-5">1 a 5</option>
                    <option value="6-10">6 a 10</option>
                    <option value="above-10">Acima de 10</option>
                  </select>
                </div>

                <button id="Button_Consultor" onClick={EnviarDados}>
                  {" "}
                  Falar com um consultor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import MaskedInput from "react-maskedinput";
import "./InputForm.scss";

function InputForm() {
  const [NameCompleto, SetNameCompleto] = useState("");

  const [Email, SetEmail] = useState("");

  const [Telefone, SetTelefone] = useState("");

  const [NomeDoRestaurante, SetNomeDoRestaurante] = useState("");

  const [QuantidadeFuncionario, SetQuantidadeFuncionario] = useState("none");

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    SetQuantidadeFuncionario(newValue);
    console.log(newValue); // Usando o valor atualizado
  };

  function EnviarDados() {
    const telefoneLimpo = Telefone.replace(/\D/g, "");

    if (
      NameCompleto === "" ||
      Email === "" ||
      telefoneLimpo.length !== 11 ||
      NomeDoRestaurante === "" ||
      QuantidadeFuncionario === "none"
    ) {
      const camposFaltantes = [];

      if (NameCompleto === "") {
        camposFaltantes.push("Nome Completo");
      }
      if (Email === "") {
        camposFaltantes.push("Email");
      }
      if (telefoneLimpo.length !== 11) {
        camposFaltantes.push("Telefone");
      }
      if (NomeDoRestaurante === "") {
        camposFaltantes.push("Nome do Restaurante");
      }
      if (QuantidadeFuncionario === "none") {
        camposFaltantes.push("Quantidade de Funcionários");
      }

      console.log(camposFaltantes);
      const camposFaltantesMessage = camposFaltantes.map((campo) => (
        <span key={campo}>
          {campo}
          <br />
        </span>
      ));

      toast.error(
        <div>
          Preencha os seguintes campos:
          <br />
          {camposFaltantesMessage}
        </div>,
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
        }
      );
    } else {
      setTimeout(() => {
        // Organize as informações em uma mensagem
        const mensagem = `Nome Completo: ${NameCompleto}\nEmail: ${Email}\nTelefone: ${Telefone}\nNome do Restaurante: ${NomeDoRestaurante}\nQuantidade de Funcionários: ${QuantidadeFuncionario}`;

        // Criar o link para o WhatsApp com a mensagem
        const numeroDeTelefone = "85989728250"; // Número de telefone de destino
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDeTelefone}&text=${encodeURIComponent(
          mensagem
        )}`;

        // Abrir o link no navegador
        window.open(linkWhatsApp, "_blank");
      }, 2000);

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

      SetNameCompleto("");
      SetEmail("");
      SetTelefone("");
      SetNomeDoRestaurante("");
      SetQuantidadeFuncionario("none");
    }
  }

  return (
    <>
      <div className="form-table">
        <div className="form-inf">
          <p>
            Preencha o formulário e garanta mais agilidade no seu negócio com as
            nossas soluções digitais.
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
              value={NameCompleto}
            />
          </div>

          <div className="label-input">
            <label>
              E-mail<span>*</span>
            </label>
            <input
              placeholder=" email@example.com"
              type="email"
              name="email"
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
              value={Email}
            />
          </div>

          <div className="label-input">
            <label>
              Telefone<span>*</span>
            </label>
            <MaskedInput
              minLength={15}
              mask="(11) 11111-1111"
              placeholder="(00)00000-0000"
              onChange={(e) => {
                SetTelefone(e.target.value);
              }}
              value={Telefone}
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
              value={NomeDoRestaurante}
            />
          </div>

          <div className="label-input">
            <label>
              Quantidade de funcionários<span>*</span>
            </label>
            <select value={QuantidadeFuncionario} onChange={handleSelectChange}>
              <option value="none" disabled selected>
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
    </>
  );
}

export default InputForm;

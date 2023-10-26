import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import InputMask from "react-input-mask";

import "./InputForm.scss";

import { dbBanco } from "../../Service/Firebase";

import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

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

  function NoneEvent(event) {
    event.preventDefault();
  }

  async function EnviarDados(event) {
    event.preventDefault();
    const telefoneLimpo = Telefone.replace(/\D/g, "");

    // const EmailValid = document.getElementById("Email").validity.valid;

    if (
      NameCompleto === "" ||
      telefoneLimpo.length !== 11 ||
      NomeDoRestaurante === "" ||
      QuantidadeFuncionario === "none"
    ) {
      const camposFaltantes = [];

      if (NameCompleto === "") {
        camposFaltantes.push("Nome Completo");
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

      console.log(Email);
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
      await addDoc(collection(dbBanco, "respostasForm"), {
        NomeCompleto: NameCompleto,
        Email: Email,
        Contato: Telefone,
        NomeDoRestaurante: NomeDoRestaurante,
        QuantidadeFuncionario: QuantidadeFuncionario,
        dataCriacao: new Date().toLocaleDateString(), // Obtém a data atual no formato DD/MM/YYYY
        horaCriacao: new Date().toLocaleTimeString(), // Obtém a hora atual no formato HH:MM:SS
      })
        .then(() => {
          toast.success("Enviado com sucesso!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
          });
        })
        .catch((e) => {
          alert(e);
        });
      setTimeout(() => {
        SetNameCompleto("");
        SetEmail("");
        SetTelefone("");
        SetNomeDoRestaurante("");
        SetQuantidadeFuncionario("none");
      }, 300);
    }
  }

  return (
    <>
      <div className="form-table" id="">
        <form onSubmit={EnviarDados}>
          <div className="form-inf">
            <p>
              Preencha o formulário e garanta mais agilidade no seu negócio com
              as nossas soluções digitais.
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
                required
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
                required
              />
            </div>

            <div className="label-input">
              <label>
                Telefone<span>*</span>
              </label>
              <InputMask
                minLength={15}
                mask="(99)99999-9999"
                placeholder="(00)00000-0000"
                onChange={(e) => {
                  SetTelefone(e.target.value);
                }}
                value={Telefone}
              />
            </div>

            <div className="label-input">
              <label>
                Nome do Restaurante<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Digite o nome do seu Restaurante"
                onChange={(e) => {
                  SetNomeDoRestaurante(e.target.value);
                }}
                value={NomeDoRestaurante}
                required
              />
            </div>

            <div className="label-input">
              <label>
                Quantidade de Funcionários<span>*</span>
              </label>
              <select
                value={QuantidadeFuncionario}
                onChange={handleSelectChange}
              >
                <option value="none" disabled selected>
                  Selecione uma opção
                </option>
                <option value="1 Funcionario">1</option>
                <option value="1-5 Funcionarios">1 a 5</option>
                <option value="6-10 Funcionarios">6 a 10</option>
                <option value="Acima de 10 Funcionarios">Acima de 10</option>
              </select>
            </div>

            <button id="Button_Consultor" type="submit">
              {" "}
              Falar com um consultor
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InputForm;

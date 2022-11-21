import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
//import useAuth from "../../hooks/useAuth";

//Tela de Esqueceu a senha
const Signup = () => {
  const [cpf] = useState("");
  const [email] = useState("");

  const navigate = useNavigate();
  const handleSignup = () => {
    if (!cpf | !email ) {
      alert("Preencha todos os campos");
      return;
    }
    alert("Você receberar um E-mail com os proximos passos");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>Esqueceu a Senha</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
        />
        <Button Text="Enviar" onClick={handleSignup} />
        <C.LabelSignin>
         <C.Strong>
            <Link to="/">&nbsp;Voltar ao login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;

import React, { useState } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Sidebar from "../../components/Sidebar";
import { FaBars } from "react-icons/fa";
import Footer from "../../components/Footer";

//Tela de cadastro
const Signup = () => {
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  const handleSignup = () => {
    if (!cpf | !email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(cpf, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <C.Container2>
    <img src="logo.png" alt="Logo da saju" /> 
    
        <C.Title>Sajuanos cadastro</C.Title>
        <Button Text="Sair" onClick={() => [navigate("/")]}>
          Sair
        </Button>

        <FaBars onClick={showSiderbar} />
        {sidebar && <Sidebar active={setSidebar} />}
    
      <C.Container>
      <C.Content>
        <Input
          type="number"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => [setCPF(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
      <Footer />
      </C.Container>
     
    </C.Container2>
  );
};

export default Signup;

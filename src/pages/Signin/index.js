import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

//Tela login
const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!cpf | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(cpf, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Label>SAJU</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu CPF, Apenas Números"
          value={cpf}
          onChange={(e) => [setCPF(e.target.value), setError("")]}
          id="campo_cpf" 
          required
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/forgotpassword">&nbsp;esqueci a senha</Link>
          </C.Strong>
        </C.LabelSignup>
        </C.Content>
      
        <C.LabelSignup>
          Desaja testar?
          <C.Strong>
            <Link to="/Signup">&nbsp;Cadastre um usuário fictício</Link>
          </C.Strong>
        </C.LabelSignup>
         
    </C.Container>
  );
};

export default Signin;

import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from '../../components/Footer';
import Logo from '../../components/Logo'







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
      <Logo src="https://d1fdloi71mui9q.cloudfront.net/zg4clEE9QuSYgBV1IXGg_7rc08N6s4D4m37aN" alt="Logo da empresa" />
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
      <Footer />
    </C.Container>
    
  );
};

export default Signin;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Tela Inicial</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    <C.Content>
      <ul id="nav">
    <li><a href="#">Buscar por assistido</a></li>
    <li><a href="#">Triagem</a></li>
       
NAJUP (só terá acesso quem for cadastrado como sajuano do NAJUP)
    <li><a href="#">NAJUP</a>
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
      </ul>
    </li>
    <li><a href="#">Meu Plantão</a></li>
    <li><a href="#">Relatórios</a></li>
    <li><a href="#">O que fazer?</a></li>
    <li><a href="#">Quero Doar</a></li>
    <li><a href="#">Nossas Redes Sociais</a></li>
  </ul>
  </C.Content>
    </C.Container>
    
  );
};

export default Home;

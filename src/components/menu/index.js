import React from "react";
import * as C from "./styles";

const menu = () => {
  return (

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
  );
};

export default menu;


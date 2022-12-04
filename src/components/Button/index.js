import React from "react";
import * as C from "./styles";
//import { Container } from './styles'

const Button = ({ Icons, Text, onClick, Type = "button" }) => {
  return (
   
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
    
  );
};

export default Button;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <C.Container>
      <C.Title>Tela Inicial</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
   
  <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </C.Container>
    
  );

};
export default Home;



/*
const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <C.Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </C.Container>
  )
}
export default Header;
*/


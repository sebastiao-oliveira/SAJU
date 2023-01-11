import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
//import * as C from "./styles";
import { FaBars } from "react-icons/fa"
import Sidebar from "../../components/Sidebar"
import UserList from "../../components/UserList"
import Footer from "../../components/Footer/index" // << Import the Footer component here
import Module from '../../components/Module';
import Header from "../../components/Header"; 

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)


  return (
    <div>
        <Header></Header>
        <FaBars onClick={showSiderbar} />
        <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
          Sair
        </Button>
        
        <UserList />
      {sidebar && <Sidebar active={setSidebar} />}
      <Module />
      <Footer />
    </div>
  );
};

export default Home;
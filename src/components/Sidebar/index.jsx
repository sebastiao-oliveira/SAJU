import React from 'react'
import { Container, Content } from './styles'
import Button from "../Button";
import { useNavigate } from "react-router-dom";
//import SidebarItem from '../SidebarItem'
import { 
  FaTimes, 
  FaHome, 
  FaRegFileAlt,
  
} from 'react-icons/fa'



const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const closeSidebar = () => {
    active(false)
  }
  const handleItem= () => {
     navigate("/SignUp");
  };
  const handleItem2= () => {
    navigate("/Home");
 };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} /> 
      <img src="logo.png" alt="Logo da saju" /> 
      <Content>
        <Button  Icon={FaHome} Text="Home" onClick={handleItem2}/>
        <Button Icon={FaRegFileAlt} Text="Buscar por assistido" onClick={handleItem2}/>
        <Button  Icon={FaRegFileAlt} Text="Triagem"  onClick={handleItem} />
        <Button  Icon={FaRegFileAlt} Text="NAJUP" onClick={handleItem2}/>
        <Button  Icon={FaRegFileAlt} Text="Meu Plantão" onClick={handleItem2}/>
        <Button  Icon={FaRegFileAlt} Text="Relatórios" onClick={handleItem}/>
        <Button  Icon={FaRegFileAlt} Text="O que fazer?" onClick={handleItem}/>
        <Button  Icon={FaRegFileAlt} Text="Quero Doar" onClick={handleItem}/>
        <Button  Icon={FaRegFileAlt} Text="Nossas Redes Sociais" onClick={handleItem}/>
        <Button  Icon={FaRegFileAlt} Text="ADMIN" onClick={handleItem}/>
      </Content>
    </Container>
  )
}

export default Sidebar
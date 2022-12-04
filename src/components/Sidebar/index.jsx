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
  

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Button  Icon={FaHome} Text="Home"/>
        <Button Icon={FaRegFileAlt} Text="Buscar por assistido" onClick={handleItem}/>
        <Button  Icon={FaRegFileAlt} Text="Triagem"  onClick={handleItem} />
        <Button  Icon={FaRegFileAlt} Text="NAJUP" onClick={handleItem}/>
        <Button  Icon={FaRegFileAlt} Text="Meu Plantão" onClick={handleItem}/>
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
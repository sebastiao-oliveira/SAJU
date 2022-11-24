import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaRegFileAlt,
  
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaRegFileAlt} Text="Buscar por assistido" />
        <SidebarItem Icon={FaRegFileAlt} Text="Triagem" />
        <SidebarItem Icon={FaRegFileAlt} Text="NAJUP" />
        <SidebarItem Icon={FaRegFileAlt} Text="Meu Plantão" />
        <SidebarItem Icon={FaRegFileAlt} Text="Relatórios" />
        <SidebarItem Icon={FaRegFileAlt} Text="O que fazer?" />
        <SidebarItem Icon={FaRegFileAlt} Text="Quero Doar" />
        <SidebarItem Icon={FaRegFileAlt} Text="Nossas Redes Sociais" />
      </Content>
    </Container>
  )
}

export default Sidebar
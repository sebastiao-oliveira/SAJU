import React from 'react'
import { Container } from './styles'

//Itens da barra lateral
const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem
import React from 'react';
import styled from 'styled-components';
import Button from '../Button';


const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
`;

const Module = () => (
  <div>
    <h1>Módulo</h1>
    <ButtonGroup>
      <Button>monitor</Button>
      <Button>sajuano</Button>
      <Button>plantao</Button>
      <Button>comissao</Button>
      <Button>frequencia</Button>
      <Button>assistido</Button>
      <Button>processo</Button>
      <Button>naju</Button>
    </ButtonGroup>
  </div>
);


export default Module;

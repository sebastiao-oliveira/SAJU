import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 1vh;
    background-color: #dec0c0;
    font-family: 'Roboto', sans-serif
  }
`;

export default GlobalStyle;

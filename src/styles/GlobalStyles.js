// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: #f0f0f0;
    color: #333;
  }
`;

export default GlobalStyles;

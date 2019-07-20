import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Darker+Grotesque:400,500,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: #f9f9f9;
    font-family: 'Darker Grotesque', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
`;

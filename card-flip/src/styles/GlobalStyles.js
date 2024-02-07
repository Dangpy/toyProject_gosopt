import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
  * {
    box-sizing : border-box;
    max-width: 100%;
    margin: 4rem auto;
    text-align: center;
    padding: 2rem;
    background-color: ${(props) => props.theme.backBlue};
  }
  html {
    font-size: 62.5%;
  }
  body{
    font-family: 'Nanum Pen Script', cursive;
  }

`;

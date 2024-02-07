import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
@font-face {
    font-family: 'OKDDUNG';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/OKDDUNG.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  body {
    font-family: 'OKDDUNG';
    background-color: rgb(233, 232, 235);
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;

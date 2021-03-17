import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { primaryFont } from "./typography";

const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 0 auto;
} 

.card {
  border: 0;
}
`;

export default GlobalStyle;

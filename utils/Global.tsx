import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./breakpoints";
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

.card-deck {
 @media (max-width: ${breakpoints["md"]}) {
  flex-direction: column;
 }
}

.btn {
  &:disabled {
    cursor: not-allowed;
  }
}
`;

export default GlobalStyle;

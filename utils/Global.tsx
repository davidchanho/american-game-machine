import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "./breakpoints";
import { Fonts } from "./fonts";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: ${Fonts.primary};
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
 @media (max-width: ${Breakpoints.md}) {
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

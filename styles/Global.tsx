import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "./breakpoints";
import { Fonts } from "./fonts";
import { TypeFace } from "./typeFace";

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
  font-family: ${TypeFace.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  h1 {
    font-size: ${Fonts.h1};
  }
  h2 {
    font-size: ${Fonts.h2};
  }
  h3 {
    font-size: ${Fonts.h3};
  }
  h4 {
    font-size: ${Fonts.h4};
  }
  h5 {
    font-size: ${Fonts.h5};
  }
  h6 {
    font-size: ${Fonts.h6};
  }
  p {
    font-size: ${Fonts.p};
  }
  small {
    font-size: ${Fonts.small};
  }
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

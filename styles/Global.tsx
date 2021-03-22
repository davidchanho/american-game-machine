import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "./breakpoints";
import { TypeFace } from "./typeFace";
import { TypeScale } from "./typeScale";

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
    font-size: ${TypeScale.h1};
  }
  h2 {
    font-size: ${TypeScale.h2};
  }
  h3 {
    font-size: ${TypeScale.h3};
  }
  h4 {
    font-size: ${TypeScale.h4};
  }
  h5 {
    font-size: ${TypeScale.h5};
  }
  h6 {
    font-size: ${TypeScale.h6};
  }
  p {
    font-size: ${TypeScale.p};
  }
  small {
    font-size: ${TypeScale.small};
  }
}

main {
  margin: 0 auto;
} 

img {
     width: 100%;
      display: block;
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

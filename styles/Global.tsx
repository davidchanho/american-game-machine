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
    font-weight: 700;
    font-size: ${TypeScale.header1};
  }
  h2 {
    font-weight: 700;
    font-size: ${TypeScale.header2};
  }
  h3 {
    font-weight: 700;
    font-size: ${TypeScale.header3};
  }
  h4 {
    font-weight: 700;
    font-size: ${TypeScale.header4};
  }
  h5 {
    font-weight: 700;
    font-size: ${TypeScale.header5};
  }
  p {
    font-weight: 500;
    font-size: ${TypeScale.paragraph};

    &.helper {
      font-size: ${TypeScale.helper};
    }
  }
 
  small {
    font-weight: 500;
    font-size: ${TypeScale.copyright};
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

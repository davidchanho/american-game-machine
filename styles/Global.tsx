import { createGlobalStyle } from "styled-components";
import Breakpoints from "./breakpoints";
import Colors from "./colors";
import TypeScale from "./type-scale";
import TypeWeight from "./type-weight";
import TypeFace from "./type-face";
import reset from './reset'

const GlobalStyle = createGlobalStyle`
${reset}

html {
  box-sizing: border-box;
  font-size: ${TypeScale.paragraph};
}

*, *:before, *:after {
  box-sizing: inherit;
  color: ${Colors.white};
  background-color: ${Colors.dark};
}

body {
  margin: 0;
  font-family: ${TypeFace.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  h1 {
    font-weight: ${TypeWeight.bold};
    font-size: ${TypeScale.header1};
  }
  h2 {
    font-weight:  ${TypeWeight.bold};
    font-size: ${TypeScale.header2};
  }
  h3 {
    font-weight:  ${TypeWeight.bold};
    font-size: ${TypeScale.header3};
  }
  h4 {
    font-weight:  ${TypeWeight.bold};
    font-size: ${TypeScale.header4};
  }
  h5 {
    font-weight:  ${TypeWeight.bold};
    font-size: ${TypeScale.header5};
  }
  p {
    font-weight:  ${TypeWeight.regular};
    font-size: ${TypeScale.paragraph};
    margin: 0;

    &.helper {
      font-size: ${TypeScale.helper};
    }
  }
 
  small {
    font-weight:  ${TypeWeight.regular};
    font-size: ${TypeScale.copyright};
  }
}

main {
  margin: 0 auto;
} 

img {
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

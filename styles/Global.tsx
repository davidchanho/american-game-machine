import { createGlobalStyle } from "styled-components";
import Breakpoints from "./breakpoints";
import Colors from "./colors";
import TypeFace from "./type-face";

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: ${TypeFace.primary};
  color: ${Colors.dark};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 0 auto;
} 

img {
  display: block;
}

.title {
  font-size: 62px;
  padding: 0;
  margin: 0;
}

.card-deck {
margin: 3rem auto;

 @media (max-width: ${Breakpoints.md}) {
  flex-direction: column;
 }
}

.card-header {
  background-color: inherit;
  border-bottom: none;
}

.btn {
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: #ccc;
    color: white;
    transition: background-color 1s ease-in-out, color 1s ease-in-out;
  }
}


`;

export default GlobalStyle;

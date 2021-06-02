import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import Breakpoints from "./breakpoints";
import Colors from "./colors";
import TypeFace from "./type-face";

const GlobalStyle = createGlobalStyle`
${normalize()}

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
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

main {
  margin: 0 auto;
} 

section {
  height: 100vh;
  scroll-snap-align: start;
}

img {
  display: block;
}

.card {
  max-height: 320px;
  max-width: 420px;
  border: 0;
}

.card-img {
  width: 100%;
  height: 100%;
}

.card, .card-header, .card-footer {
  background-color: inherit;
}

.card-header {
  border-bottom: none;
}

.card-footer {
  border-top: none;
}

.card-body, .card-header, .card-footer {
  padding: 0;
  margin: 0;
}

.card-deck {
  margin: 3rem auto;

 @media (max-width: ${Breakpoints.lg}) {
  flex-direction: column;
  
  & > .card {
    margin: 0 0 1rem 0;
  }
 }
}

.anchor > span {
  display: block;
  position: relative;
  top: -80px;
  visibility: hidden;
}

.btn {
  border-radius: 0;
  font-weight: bold;
  min-width: 150px;
  border: 2px solid transparent;

  @media (max-width: ${Breakpoints.md}) {
    width: 100%;
  }
}

.btn-light {
  &:hover {
    background-color: ${Colors.dark};
    color: ${Colors.white};
  }
}

.btn-dark {
  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.dark};
  }
}

.hide-desktop {
  display: none;
  @media (min-width: ${Breakpoints.lg}) {
    display: block;
  }
}

.hide-tablet {
  display: none;
  @media (min-width: ${Breakpoints.md}) and (max-width: ${Breakpoints.lg}) {
    display: block;
  }
}

.hide-mobile {
  display: block;
  @media (max-width: ${Breakpoints.md}) {
    display: none;
  }
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
`;

export default GlobalStyle;

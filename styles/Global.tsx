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
}

.card {
  background-color: inherit;
  max-height: 320px;
  max-width: 420px;
}

.card-img {
  width: 100%;
  height: 100%;
}

.card-deck {
  margin: 3rem auto;

 @media (max-width: ${Breakpoints.lg}) {
  flex-direction: column;
 }
}

.anchor > span {
  display: block;
  position: relative;
  top: -80px;
  visibility: hidden;
}

.card {
  border: 0;
}

.card-header {
  background-color: inherit;
  border-bottom: none;
}

.btn {
  border-radius: 0;
  font-weight: bold;

  &:hover {
    background-color: #ccc;
    color: white;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  @media (max-width: ${Breakpoints.md}) {
    width: 100%;
  }
}

.hide-desktop {
  display: none;
  @media (max-width: ${Breakpoints.md}) {
    display: block;
  }
}

.hide-mobile {
  display: block;
  @media (max-width: ${Breakpoints.md}) {
    display: none;
  }
}

p {
  margin: 0;
}
`;

export default GlobalStyle;

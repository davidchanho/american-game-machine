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
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

main {
  margin: 0 auto;
} 

section {
  min-height: 100vh;
  margin-bottom: 4rem;
  scroll-snap-align: start;
}

.bg-transparent {
  background-color: transparent;
}

img {
  display: block;
}

.card {
  max-height: 20rem;
  max-width: 26.25rem;
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
  top: -5rem;
  visibility: hidden;
}

.btn {
  border-radius: 0;
  font-weight: bold;
  min-width: 9.375rem;
  border: 0.125rem solid transparent;
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

.mobile-full {
  @media (max-width: ${Breakpoints.md}) {
    width: 100%;
  }
}

.show-desktop {
  display: none;
  @media (min-width: ${Breakpoints.lg}) {
    display: block;
  }
}

.show-tablet {
  display: none;
  @media only screen and (min-width: ${Breakpoints.xs}) and (max-width: ${Breakpoints.lg}) {
    display: block;
  }
}

.show-mobile {
  @media (max-width: ${Breakpoints.xs}) {
    display: none;
  }
}

.navbar-collapse {
  @media (max-width: ${Breakpoints.sm}) {
    z-index: 999;
    position: absolute;
    top: 85%;
    left: 0;
    right: 0;
    text-align: center;
    background-color: ${Colors.dark};
    padding: 0.75rem 0;
  }
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

.list-group {
  width: 100%;
}

.list-group-item {
  border: 0;
  padding: 0;
  margin-top: 1rem;
  background-color: inherit;
  color: white;
}
`;

export default GlobalStyle;

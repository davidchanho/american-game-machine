import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Main = styled.main`
  min-height: 100vh;
  position: relative;

  .container {
    min-height: 75vh;
    margin: 5vh auto;

    section {
      min-height: 75vh;
    }
  }
`;

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Header />
      <Navbar />
      <Container>{children}</Container>
      <Footer />
      <ScrollToTop />
    </Main>
  );
}

export default Layout;

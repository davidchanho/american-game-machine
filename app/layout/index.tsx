import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top";

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

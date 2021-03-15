import { PropsWithChildren } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top";
import { Container as BsContainer  } from "react-bootstrap";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  position: relative;
`;

const Container = styled(BsContainer)`
  min-height: 75vh;
  margin: 5vh auto;

  section {
    margin: 5vh auto;
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

import { PropsWithChildren } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  position: relative;
`;

const Section = styled(Container)`
  min-height: 75vh;
  margin: 5vh auto;
`;

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Header />
      <Navbar />
      <Section>{children}</Section>
      <Footer />
      <ScrollToTop />
    </Main>
  );
}

export default Layout;

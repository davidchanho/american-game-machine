import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top";
import Main from "./Main";
import { PropsWithChildren } from "react";
import Section from "./Section";

function MainLayout({children}: PropsWithChildren<{}>) {
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

export default MainLayout;

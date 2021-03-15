import { PropsWithChildren } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ScrollToTop from "../components/scroll-to-top";
import { Main, Section } from "./styles";

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

import React, { PropsWithChildren } from "react";
import Hero from "../../home/hero";
import Footer from "../footer";
import Head from "../head";
import { Container, Main } from "./styles";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Head />
      <Hero />
      <Container>{children}</Container>
      <Footer />
    </Main>
  );
}

export default Layout;

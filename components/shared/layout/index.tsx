import React, { PropsWithChildren } from "react";
import { companyName } from "../../context";
import Footer from "../footer";
import Head from "../head";
import Navbar from "../navbar";
import { Container, Main } from "./styles";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Head />
      <Navbar />
      <Container>{children}</Container>
      <Footer>{companyName}™ 2021</Footer>
    </Main>
  );
}

export default Layout;

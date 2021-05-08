import React, { PropsWithChildren } from "react";
import { companyName } from "../../context";
import Footer from "../footer";
import Head from "../head";
import Navbar from "../navbar";
import ScrollToTop from "../scroll-to-top";
import { Main } from "./styles";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Head />
      <Navbar />
      {children}
      <Footer>{companyName}™ 2021</Footer>
      <ScrollToTop />
    </Main>
  );
}

export default Layout;

import React, { PropsWithChildren } from "react";
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
      <Footer />
      <ScrollToTop />
    </Main>
  );
}

export default Layout;

import React, { PropsWithChildren } from "react";
import Hero from "../../home/hero";
import Footer from "../footer";
import Head from "../head";
import Sidebar from "../sidebar";
import { Main } from "./styles";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <Main>
      <Head />
      <Hero />
      <div>{children}</div>
      <Sidebar />
      <Footer />
    </Main>
  );
}

export default Layout;

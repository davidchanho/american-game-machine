import React, { PropsWithChildren } from "react";
import Hero from "../hero";
import Footer from "../../components/footer";
import Head from "../../components/head";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Head />
      <Hero />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;

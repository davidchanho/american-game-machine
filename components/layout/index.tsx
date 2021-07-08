import React, { PropsWithChildren } from "react";
import Hero from "../hero";
import Footer from "../footer";
import Head from "../head";

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

import React, { PropsWithChildren } from "react";
import Hero from "../../home/hero";
import Footer from "../footer";
import Head from "../head";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Head />
      <Hero />
      <div className="position-relative">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;

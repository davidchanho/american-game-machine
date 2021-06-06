import React, { PropsWithChildren } from "react";
import BackToTop from "../back-to-top";
import Footer from "../footer";
import Head from "../head";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Head />
      <BackToTop />
      <div className="position-relative">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;

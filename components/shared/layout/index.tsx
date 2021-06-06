import React, { PropsWithChildren } from "react";
import Footer from "../footer";
import Head from "../head";

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Head />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;

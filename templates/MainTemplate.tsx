import React, { PropsWithChildren } from "react";
import Footer from "../components/footer";
import Head from "../components/head";

function MainTemplate({ children }: PropsWithChildren<{}>) {
  return (
    <main>
      <Head />
      {children}
      <Footer />
    </main>
  );
}

export default MainTemplate;

import Head from "next/head";
import React from "react";
import { useAppContext } from "../../context";

function Header() {
  const {
    companyInfo: { name },
  } = useAppContext();
  return (
    <Head>
      <title>{name}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Header;

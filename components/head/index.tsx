import NHead from "next/head";
import React from "react";
import { companyName } from "../../data";

function Head() {
  return (
    <NHead>
      <meta charSet="utf-8" />
      <title>Skill Game Machines and business solutions | {companyName}</title>
      <meta
        name="description"
        content="We provide stand ups and fish tables for sale or rent, repair, consulting and store setup. We are located conveniently in Greensboro, NC."
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="American Game Machine - Arcade machines sales and services - Skill games"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* bing webmaster tool */}
      <meta name="msvalidate.01" content="654E17C0EEC2FCAFAEDFB170859C4D1A" />

      <script>
        {process.env.NODE_ENV == "production"
          ? "window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}"
          : ""}
      </script>
    </NHead>
  );
}

export default Head;

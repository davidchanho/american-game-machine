import React from "react";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap.scss";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import "bootstrap/dist/css/bootstrap-reboot.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../config/googleAnalytics";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

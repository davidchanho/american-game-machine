import "bootstrap/dist/css/bootstrap-reboot.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Layout from "../components/layout";
import "../config/googleAnalytics";
import { AppProvider } from "../context/context";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;

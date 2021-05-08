import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css/normalize.css";
import React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import { AppProvider } from "../context/context";
import { theme } from "../styles";
import GlobalStyle from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;

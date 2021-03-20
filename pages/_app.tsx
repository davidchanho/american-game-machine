import "normalize.css/normalize.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../context/context";
import { theme } from "../utils";
import GlobalStyle from "../utils/Global";
import Layout from "../components/_shared/layout";

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

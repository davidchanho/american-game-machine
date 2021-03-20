import "bootstrap/dist/css/bootstrap.css";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../context/context";
import { theme } from "../utils";
import GlobalStyle from "../utils/Global";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;

import "bootstrap/dist/css/bootstrap.css";
import { AppProvider } from "../context/context";
import GlobalStyle from "../utils/Global";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}

export default MyApp;

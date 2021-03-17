import "bootstrap/dist/css/bootstrap.css";
import { AppProvider } from "../context/context";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";
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

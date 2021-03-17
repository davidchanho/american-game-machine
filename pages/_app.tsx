import { AppContext, AppProvider } from '../app/context/context'
import 'bootstrap/dist/css/bootstrap.css'
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import GlobalStyle from '../utils/Global';
import { ContextDevTool } from "react-context-devtool";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      {(values) => {
        if (window._REACT_CONTEXT_DEVTOOL) {
          window._REACT_CONTEXT_DEVTOOL({
            id: "uniqContextId",
            displayName: "Context Display Name",
            values,
          });
        }
        return null;
      }}
      <ContextDevTool
        context={AppContext}
        id="uniqContextId"
        displayName="Context Display Name"
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}

export default MyApp
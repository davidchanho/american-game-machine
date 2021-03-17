import { AppProvider } from '../app/context'
import 'bootstrap/dist/css/bootstrap.css'
import GlobalStyle from '../utils/Global';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
        <Component {...pageProps} />
        <GlobalStyle/>
    </AppProvider>
  );
}

export default MyApp

import React from 'react';
import { AppProvider } from '../app/context'
import 'bootstrap/scss/bootstrap.scss'
import GlobalStyle from '../styles';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
        <Component {...pageProps} />
        <GlobalStyle/>
    </AppProvider>
  );
}

export default MyApp

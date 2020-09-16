import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql';
import { appWithTranslation } from '../../i18n';

// This default export is required in a new `pages/_app.js` file.
function MyApp({
  Component, pageProps,
}: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider
        client={client}
      >
        <CssBaseline />
        <Component
          {...pageProps}
        />
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql';
import { ThemeModeContext } from '@contexts';
import { appWithTranslation } from '../../../i18n';
import { useAppHook } from './hooks';

/**
 * This default export is required in a new `pages/_app.js` file.
 */
function MyApp({
  Component, pageProps,
}: AppProps) {
  const layoutProps = useAppHook();
  const { theme } = layoutProps;
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
        <ThemeProvider
          theme={theme}
        >
          <CssBaseline />
          <ThemeModeContext.Provider value={layoutProps}>
            <Component
              {...pageProps}
            />
          </ThemeModeContext.Provider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

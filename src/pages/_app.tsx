import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql';
import {
  createMuiTheme, ThemeProvider,
} from '@material-ui/core/styles';
import {
  darkTheme, lightTheme,
} from '@styles';
import { appWithTranslation } from '../../i18n';

export const useLayoutHook = () => {
  const [isDarkMode, setMode] = useState<boolean | undefined>(false);

  const theme:any = isDarkMode ? darkTheme : lightTheme;

  return {
    isDarkMode,
    setMode,
    theme: createMuiTheme(theme),
  };
};

// This default export is required in a new `pages/_app.js` file.
function MyApp({
  Component, pageProps,
}: AppProps) {
  const { theme } = useLayoutHook();
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
          <Component
            {...pageProps}
          />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

import React from 'react';
import Head from 'next/head';
import { SkeletonTheme } from 'react-loading-skeleton';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@src/graphql/client';
import { GlobalContext } from '@contexts';
import { appWithTranslation } from '../../../i18n';
import {
  useAppHook,
  useKeybaseHook,
  useGetValidatorAddressListHook,
} from './hooks';
import { useGetStyles } from './styles';
import 'react-toastify/dist/ReactToastify.css';

/**
 * This default export is required in a new `pages/_app.js` file.
 */
function MyApp({
  Component, pageProps,
}: AppProps) {
  // =============================
  // global hooks
  // =============================
  const layoutProps = useAppHook();
  const keybaseProps = useKeybaseHook();
  const validatorProps = useGetValidatorAddressListHook();

  // =============================
  // global state
  // =============================
  const globalState = {
    ...layoutProps,
    ...keybaseProps,
    ...validatorProps,
  };

  // =============================
  // styles setup
  // =============================
  const { theme } = layoutProps;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const { classes } = useGetStyles();

  // =============================
  // utils
  // =============================
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="apple-touch-icon" sizes="180x180" href={`${baseUrl}/images/icons/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${baseUrl}/images/icons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${baseUrl}/images/icons/favicon-16x16.png`} />
        <link rel="manifest" href={`${baseUrl}/images/icons/site.webmanifest`} />
        <link rel="mask-icon" href={`${baseUrl}/images/icons/safari-pinned-tab.svg`} color="#5bbad5" />
        <link rel="shortcut icon" href={`${baseUrl}/images/icons/favicon.ico`} />
      </Head>
      <ApolloProvider
        client={apolloClient}
      >
        <ThemeProvider
          theme={theme}
        >
          <SkeletonTheme
            color={theme?.palette?.background?.default}
            highlightColor={theme?.palette?.background?.paperLowOpacity}
          >
            <CssBaseline />
            <GlobalContext.Provider
              value={globalState}
            >
              <Component
                {...pageProps}
              />
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className={classes.toast}
              />
            </GlobalContext.Provider>
          </SkeletonTheme>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

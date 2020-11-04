import React, { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql';
import { ThemeModeContext } from '@contexts';
import { ThemeProvider } from '@material-ui/core/styles';
import { getLanguageValue } from '@utils';
import {
  darkTheme,
  lightTheme,
} from '@styles';
import {
  appWithTranslation,
  i18n,
  useTranslation,
} from '../../i18n';

export const useAppHook = () => {
  const { t } = useTranslation('common');
  // =========================
  // theme
  // =========================
  const [themeMode, setMode] = useState('light');

  const theme:any = themeMode === 'dark' ? darkTheme : lightTheme;

  const toggleThemeMode = () => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setMode(value);
  };

  const getThemeMode = () => {
    return ({
      value: t(themeMode),
      key: themeMode,
    });
  };

  // =========================
  // language
  // =========================
  const changeLanguage = (lang:string) => {
    i18n.changeLanguage(lang);
  };

  const getCurrentLanguage = () => {
    const lang = i18n.language;
    return {
      key: lang,
      value: getLanguageValue(lang),
    };
  };

  return {
    themeMode,
    setMode,
    theme,
    toggleThemeMode,
    changeLanguage,
    getCurrentLanguage,
    getThemeMode,
  };
};

// This default export is required in a new `pages/_app.js` file.
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

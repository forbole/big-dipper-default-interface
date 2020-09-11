import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import client from '@graphql';
import { appWithTranslation } from '../../i18n';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);

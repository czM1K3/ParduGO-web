import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo';
import { FavoriteProvider } from 'utils/favoriteContext';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <FavoriteProvider>
        <Component {...pageProps} />
      </FavoriteProvider>
    </ApolloProvider>
  );
}

export default MyApp;

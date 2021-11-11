import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

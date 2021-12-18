import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { schema } from './schema';

export const client = new ApolloClient({
	ssrMode: true,
	link: new SchemaLink({ schema }),
	cache: new InMemoryCache(),
});

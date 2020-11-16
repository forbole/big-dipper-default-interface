import {
  ApolloClient,
  InMemoryCache,
  split, HttpLink,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

const wsLink = new WebSocketLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_WS,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const {
      kind, operation,
    }:any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;

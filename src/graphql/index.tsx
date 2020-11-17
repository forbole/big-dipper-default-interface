import WebSocket from 'isomorphic-ws';
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
  uri: process.env.NEXT_PUBLIC_GRAPHQL_WS ?? 'wss://localhost:3000',
  options: {
    reconnect: true,
  },
  webSocketImpl: WebSocket,
});

const link = process?.browser ? split(
  ({ query }) => {
    const {
      kind, operation,
    }:any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
) : httpLink;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;

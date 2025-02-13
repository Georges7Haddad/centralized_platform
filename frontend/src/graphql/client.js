"use client";

import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

const serverUrl = `${process.env.BACKEND_URL}/users`; 

function makeClient() {
  return new ApolloClient({
    uri: serverUrl,
    cache: new InMemoryCache(),
  });
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

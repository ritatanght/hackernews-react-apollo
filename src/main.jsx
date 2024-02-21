import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App.jsx";
import "./styles/index.css";
import { AUTH_TOKEN } from "./constants";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

// This middleware will be invoked every time ApolloClient sends a request to the server
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

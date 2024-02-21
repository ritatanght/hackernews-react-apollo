import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

const client = new ApolloClient({
  link: httpLink,
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

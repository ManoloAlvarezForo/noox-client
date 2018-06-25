import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { AUTH_TOKEN } from './constants'
import { ApolloLink, concat } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
// import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { HttpLink, createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext} from 'apollo-link-context';

const httpLink = createHttpLink({ uri: `http://localhost:4000/graphql` })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const authorizationHeader = token ? `Bearer ${token}` : null;
  if (authorizationHeader !== null) {
    operation.setContext({
      headers: {
        authorization: authorizationHeader,
      },
    })
  }
  return forward(operation)
})

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
registerServiceWorker()
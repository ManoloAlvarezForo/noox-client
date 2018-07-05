import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './animate.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { AUTH_TOKEN, GRAPHQL_URL } from './constants'
import { ApolloLink, concat } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { Provider } from 'react-redux';
import { configureStore } from './store/ConfigureStore'

// Redux Store configuration.
const store = configureStore();

const httpLink = createHttpLink({ uri: GRAPHQL_URL })

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
  <Provider store={store}>
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
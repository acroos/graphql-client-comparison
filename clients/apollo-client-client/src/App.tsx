import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products/:id" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App

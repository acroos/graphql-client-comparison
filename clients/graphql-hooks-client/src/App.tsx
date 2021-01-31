import React from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

const client = new GraphQLClient({
  url: 'http://localhost:3000/graphql',
  cache: memCache(),
})

function App() {
  return (
    <ClientContext.Provider value={client}>
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
    </ClientContext.Provider>
  )
}

export default App

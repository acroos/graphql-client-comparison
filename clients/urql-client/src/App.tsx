import React from 'react'
import { createClient, Provider } from 'urql'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

const client = createClient({
  url: 'http://localhost:3000/graphql',
})

function App() {
  return (
    <Provider value={client}>
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
    </Provider>
  )
}

export default App

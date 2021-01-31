import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {
  return (
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
  )
}

export default App

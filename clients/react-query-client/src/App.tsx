import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App

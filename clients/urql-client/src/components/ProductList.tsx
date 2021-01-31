import React from 'react'

import useProducts from '../useProducts'
import ProductListItem from './ProductListItem'

import { Link } from 'react-router-dom'
import NewProduct from './NewProduct'

export default function ProductList() {
  const [{ data, fetching, error }, reexecuteQuery] = useProducts()

  if (error) {
    return <div>Error!</div>
  }

  if (fetching) {
    return <div>Loading...</div>
  }

  if (data === undefined) {
    return <div>Unknown Error</div>
  }

  const { fetchProducts: products } = data

  return (
    <div className="ProductList">
      <h1 className="ProductListHeader">Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <NewProduct reexecuteQuery={reexecuteQuery} />
        {products &&
          products.map((product) => {
            const url = `/products/${product.id}`
            return (
              <Link
                key={product.id}
                to={url}
                style={{ textDecoration: 'none', margin: 10 }}
              >
                <ProductListItem product={product} />
              </Link>
            )
          })}
      </div>
    </div>
  )
}

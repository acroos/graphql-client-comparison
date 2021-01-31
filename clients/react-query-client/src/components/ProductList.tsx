import React from 'react'

import useProducts from '../useProducts'
import ProductListItem from './ProductListItem'

import './ProductList.css'
import { Link } from 'react-router-dom'

export default function ProductList() {
  const { data: products, isError, isLoading } = useProducts()

  return (
    <div className="ProductList">
      <h1 className="ProductListHeader">Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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

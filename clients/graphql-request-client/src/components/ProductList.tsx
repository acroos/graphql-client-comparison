import React, { useEffect, useState } from 'react'
import { request, gql } from 'graphql-request'
import { Link } from 'react-router-dom'

import ProductListItem from './ProductListItem'
import { Product, ProductsQueryResponse } from '../types'

const QUERY = gql`
  query {
    fetchProducts {
      id
      name
      price
      reviews {
        userName
        body
        createdAt
      }
    }
  }
`

export default function ProductList() {
  const [products, setProducts] = useState<Product[] | undefined>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    request('http://localhost:3000/graphql', QUERY)
      .then((data: ProductsQueryResponse) => {
        setProducts(data.fetchProducts)
      })
      .catch((reason) => {
        setError(reason.response.errors[0]?.message)
      })
  }, [])

  if (error) {
    return <div>Error!</div>
  }

  if (products === undefined) {
    return <div>Loading...</div>
  }

  return (
    <div className="ProductList">
      <h1 className="ProductListHeader">Products</h1>
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

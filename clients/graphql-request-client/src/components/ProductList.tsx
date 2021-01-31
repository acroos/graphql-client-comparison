import React, { useEffect, useState } from 'react'
import { request, gql } from 'graphql-request'

import ProductListItem from './ProductListItem'
import { Product, QueryResponse } from '../types'

import './ProductList.css'

const QUERY = gql`
  query {
    fetchProducts {
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
  const [products, setProducts] = useState<Product[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    request('http://localhost:3000/graphql', QUERY)
      .then((data: QueryResponse) => {
        setProducts(data.fetchProducts)
      })
      .catch((reason) => {
        setError(reason.response.errors[0]?.message)
      })
  }, [])

  return (
    <div className="ProductList">
      <h1 className="ProductListHeader">Products</h1>
      {products === undefined && error === undefined && <p>Loading...</p>}
      {error && <p>Error!: {error}</p>}
      <React.Fragment>
        {products &&
          products.map((product) => (
            <ProductListItem key={product.name} product={product} />
          ))}
      </React.Fragment>
    </div>
  )
}

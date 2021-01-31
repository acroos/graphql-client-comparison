import React, { useState, useEffect } from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { request, gql } from 'graphql-request'
import { ProductQueryResponse, ProductWithReviews } from '../types'

const QUERY = gql`
  query FetchProduct($productId: Int!) {
    fetchProduct(productId: $productId) {
      id
      name
      price
      reviews {
        id
        userName
        body
        createdAt
      }
    }
  }
`

type ProductDetailParams = {
  id: string
}
type ProductDetailProps = RouteComponentProps<ProductDetailParams>

function ProductDetail({ match }: ProductDetailProps) {
  const [product, setProduct] = useState<ProductWithReviews | undefined>()
  const [error, setError] = useState()

  useEffect(() => {
    request('http://localhost:3000/graphql', QUERY, {
      productId: +match.params.id,
    })
      .then((data: ProductQueryResponse) => {
        setProduct(data.fetchProduct)
      })
      .catch((reason) => {
        setError(reason.response.errors[0]?.message)
      })
  }, [match.params.id])

  if (error) {
    return <div>Error!</div>
  }

  if (product === undefined) {
    return <div>Product not found</div>
  }

  return (
    <div
      className="ProductDetail"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginBottom: 0 }}>{product.name}</h1>
      <h5 style={{ marginTop: 0 }}>€{product.price}</h5>
      <h2>Reviews</h2>
      {product.reviews.map((review) => (
        <div
          className="ReviewListItem"
          key={review.id}
          style={{
            borderBottom: '1px dotted green',
            padding: 20,
            maxWidth: '50%',
          }}
        >
          <span>
            <strong>{review.userName}</strong>
            <small> [ {review.createdAt} ] </small>
          </span>
          <p>{review.body}</p>
        </div>
      ))}
    </div>
  )
}

export default withRouter(ProductDetail)

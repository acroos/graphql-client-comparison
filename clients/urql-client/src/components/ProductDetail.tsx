import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

import useProduct from '../useProduct'

type ProductDetailParams = {
  id: string
}
type ProductDetailProps = RouteComponentProps<ProductDetailParams>

function ProductDetail({ match }: ProductDetailProps) {
  const [{ data, fetching, error }, reexecuteQuery] = useProduct(
    +match.params.id
  )

  if (error) {
    return <div>Error!</div>
  }

  if (fetching) {
    return <div>Loading...</div>
  }

  if (data === undefined) {
    return <div>Product not found</div>
  }

  const { fetchProduct: product } = data

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

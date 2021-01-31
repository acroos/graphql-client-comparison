import { useQuery, gql } from '@apollo/client'
import { ProductQueryResponse } from './types'

const QUERY = gql`
  query FetchProduct($productId: Int!) {
    fetchProduct(productId: $productId) {
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

type QueryVariables = {
  productId: number
}

export default function useProduct({ productId }: QueryVariables) {
  return useQuery<ProductQueryResponse, QueryVariables>(QUERY, {
    variables: { productId },
  })
}

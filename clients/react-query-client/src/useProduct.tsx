import { request, gql } from 'graphql-request'
import { useQuery } from 'react-query'
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

export default function useProduct(productId: Number) {
  return useQuery(
    ['product', productId],
    async () => {
      const {
        fetchProduct: product,
      }: ProductQueryResponse = await request(
        'http://localhost:3000/graphql',
        QUERY,
        { productId: productId }
      )

      return product
    },
    {
      enabled: !!productId,
    }
  )
}

import { useQuery } from 'urql'
import { ProductQueryResponse } from './types'

const QUERY = `
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

export default function useProduct(productId: number) {
  const [result, reexecuteQuery] = useQuery<
    ProductQueryResponse,
    QueryVariables
  >({
    query: QUERY,
    variables: { productId },
  })
  return result
}

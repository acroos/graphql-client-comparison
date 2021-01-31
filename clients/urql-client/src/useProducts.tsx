import { useQuery } from 'urql'
import { ProductsQueryResponse } from './types'

const QUERY = `
  query {
    fetchProducts {
      id
      name
      price
    }
  }
`

export default function useProducts() {
  return useQuery<ProductsQueryResponse, {}>({
    query: QUERY,
  })
}

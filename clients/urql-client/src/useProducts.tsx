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
  const [result, reexecuteQuery] = useQuery<ProductsQueryResponse, {}>({
    query: QUERY,
  })
  return result
}

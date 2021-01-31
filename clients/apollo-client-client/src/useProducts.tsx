import { useQuery, gql } from '@apollo/client'
import { ProductsQueryResponse } from './types'

const QUERY = gql`
  query {
    fetchProducts {
      id
      name
      price
    }
  }
`

export default function useProducts() {
  return useQuery<ProductsQueryResponse, any>(QUERY)
}

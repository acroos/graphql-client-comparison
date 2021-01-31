import { request, gql } from 'graphql-request'
import { useQuery } from 'react-query'
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
  return useQuery('products', async () => {
    const { fetchProducts: products }: ProductsQueryResponse = await request(
      'http://localhost:3000/graphql',
      QUERY
    )
    return products
  })
}

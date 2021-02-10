import { useQuery, gql, ApolloClient, InMemoryCache } from '@apollo/client'
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

const nuClient = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
})

export default function useProducts() {
  return useQuery<ProductsQueryResponse, any>(QUERY, { client: nuClient })
}

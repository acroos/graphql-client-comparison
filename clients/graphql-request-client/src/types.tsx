export type Review = {
  userName: string
  body: string
  createdAt: Date
}

export type Product = {
  name: string
  price: Number
  reviews: Review[]
}

export type QueryResponse = {
  fetchProducts: Product[]
}

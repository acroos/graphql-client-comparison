export type Review = {
  id: number
  userName: string
  body: string
  createdAt: Date
}

export type Product = {
  id: number
  name: string
  price: number
}

export type ProductWithReviews = {
  id: number
  name: string
  price: number
  reviews: Review[]
}

export type ProductsQueryResponse = {
  fetchProducts: Product[]
}

export type ProductQueryResponse = {
  fetchProduct: ProductWithReviews
}
